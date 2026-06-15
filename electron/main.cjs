'use strict';

const { app, BrowserWindow, shell, ipcMain, dialog } = require('electron');
const http = require('http');
const fs = require('fs');
const fsp = require('fs/promises');
const path = require('path');
const { spawn } = require('child_process');
const os = require('os');
const zlib = require('zlib');

const DIST = path.join(__dirname, '..', 'dist', 'public');

// Pasta onde os projetos são salvos no PC do usuário
const PROJECTS_DIR = path.join(os.homedir(), 'MaikonJuridicoPro', 'projetos');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.css': 'text/css',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.json': 'application/json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.ico': 'image/x-icon',
  '.txt': 'text/plain',
  '.webmanifest': 'application/manifest+json',
  '.map': 'application/json',
  '.wasm': 'application/wasm',
  '.zip': 'application/zip',
};

function startServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const url = req.url.split('?')[0];
      let filePath = path.join(DIST, url === '/' ? 'index.html' : url);

      res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
      res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
      res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');

      fs.stat(filePath, (err, stat) => {
        if (err || !stat.isFile()) {
          filePath = path.join(DIST, 'index.html');
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
        } else {
          const ext = path.extname(filePath).toLowerCase();
          res.setHeader('Content-Type', MIME[ext] || 'application/octet-stream');
          res.setHeader('Cache-Control', 'max-age=3600');
        }
        const stream = fs.createReadStream(filePath);
        stream.on('error', () => {
          res.statusCode = 404;
          res.end('Not found');
        });
        stream.pipe(res);
      });
    });

    server.listen(0, '127.0.0.1', () => {
      resolve(server.address().port);
    });
  });
}

// ─── Terminal Real via IPC (sem timeout) ────────────────────────────────────
const sessions = new Map();
let sessionCounter = 0;

function getShell() {
  if (process.platform === 'win32') {
    return { cmd: process.env.ComSpec || 'cmd.exe', args: [] };
  }
  const sh = process.env.SHELL || '/bin/bash';
  return { cmd: sh, args: ['--norc', '--noprofile'] };
}

ipcMain.handle('terminal:spawn', (event) => {
  const id = ++sessionCounter;
  const { cmd, args } = getShell();

  const proc = spawn(cmd, args, {
    cwd: os.homedir(),
    env: {
      ...process.env,
      TERM: 'xterm-256color',
      COLORTERM: 'truecolor',
      // Sem timeout — processo vive até ser explicitamente morto
    },
    stdio: ['pipe', 'pipe', 'pipe'],
    // Mantém processo vivo em segundo plano
    detached: false,
  });

  sessions.set(id, proc);

  const send = (data) => {
    try { event.sender.send(`terminal:data:${id}`, data); } catch {}
  };

  proc.stdout.on('data', d => send(d.toString('utf8')));
  proc.stderr.on('data', d => send(d.toString('utf8')));

  proc.on('exit', (code) => {
    try { event.sender.send(`terminal:exit:${id}`, code ?? 0); } catch {}
    sessions.delete(id);
  });

  proc.on('error', (err) => {
    send(`\r\n[Erro ao iniciar shell: ${err.message}]\r\n`);
    sessions.delete(id);
  });

  return { id, shell: cmd, home: os.homedir(), platform: process.platform };
});

ipcMain.on('terminal:write', (_event, { id, data }) => {
  const proc = sessions.get(id);
  if (proc && proc.stdin.writable) {
    proc.stdin.write(data);
  }
});

ipcMain.on('terminal:kill', (_event, { id }) => {
  const proc = sessions.get(id);
  if (proc) {
    try { proc.kill('SIGTERM'); } catch {}
  }
  sessions.delete(id);
});

ipcMain.handle('terminal:info', () => ({
  platform: process.platform,
  home: os.homedir(),
  shell: getShell().cmd,
  arch: process.arch,
  nodeVersion: process.version,
  projectsDir: PROJECTS_DIR,
}));

// ─── Filesystem — Projetos no disco do PC ───────────────────────────────────

async function ensureProjectsDir() {
  try { await fsp.mkdir(PROJECTS_DIR, { recursive: true }); } catch {}
}

// Salvar projeto (objeto { files: Record<string,string>, name, updatedAt })
ipcMain.handle('fs:saveProject', async (_event, { name, files }) => {
  await ensureProjectsDir();
  const safe = name.replace(/[^a-zA-Z0-9_\-\.áéíóúâêîôûãõàèìòùçÁÉÍÓÚÂÊÎÔÛÃÕÀÈÌÒÙÇ ]/g, '_').slice(0, 80);
  const file = path.join(PROJECTS_DIR, `${safe}.mjp.json`);
  const data = JSON.stringify({ name, files, updatedAt: Date.now() }, null, 2);
  await fsp.writeFile(file, data, 'utf8');
  return { ok: true, path: file };
});

// Carregar projeto pelo nome
ipcMain.handle('fs:loadProject', async (_event, { name }) => {
  await ensureProjectsDir();
  const safe = name.replace(/[^a-zA-Z0-9_\-\.áéíóúâêîôûãõàèìòùçÁÉÍÓÚÂÊÎÔÛÃÕÀÈÌÒÙÇ ]/g, '_').slice(0, 80);
  const file = path.join(PROJECTS_DIR, `${safe}.mjp.json`);
  try {
    const raw = await fsp.readFile(file, 'utf8');
    return { ok: true, data: JSON.parse(raw) };
  } catch (e) {
    return { ok: false, error: e.message };
  }
});

// Listar projetos salvos no disco
ipcMain.handle('fs:listProjects', async () => {
  await ensureProjectsDir();
  try {
    const entries = await fsp.readdir(PROJECTS_DIR);
    const projects = [];
    for (const entry of entries) {
      if (!entry.endsWith('.mjp.json')) continue;
      try {
        const raw = await fsp.readFile(path.join(PROJECTS_DIR, entry), 'utf8');
        const parsed = JSON.parse(raw);
        projects.push({
          name: parsed.name,
          updatedAt: parsed.updatedAt,
          fileCount: Object.keys(parsed.files || {}).length,
          filePath: path.join(PROJECTS_DIR, entry),
        });
      } catch {}
    }
    return { ok: true, projects: projects.sort((a, b) => (b.updatedAt || 0) - (a.updatedAt || 0)) };
  } catch (e) {
    return { ok: false, projects: [], error: e.message };
  }
});

// Deletar projeto do disco
ipcMain.handle('fs:deleteProject', async (_event, { name }) => {
  const safe = name.replace(/[^a-zA-Z0-9_\-\.áéíóúâêîôûãõàèìòùçÁÉÍÓÚÂÊÎÔÛÃÕÀÈÌÒÙÇ ]/g, '_').slice(0, 80);
  const file = path.join(PROJECTS_DIR, `${safe}.mjp.json`);
  try { await fsp.unlink(file); return { ok: true }; } catch (e) { return { ok: false, error: e.message }; }
});

// Exportar projeto como ZIP para o disco (via diálogo de salvar)
ipcMain.handle('fs:exportZip', async (event, { name, files, platform }) => {
  const win = BrowserWindow.fromWebContents(event.sender);
  const defaultName = `${name.replace(/[^a-zA-Z0-9_\-]/g, '_')}-${platform || 'deploy'}.zip`;
  const { filePath, canceled } = await dialog.showSaveDialog(win, {
    title: 'Salvar ZIP de Deploy',
    defaultPath: path.join(os.homedir(), 'Desktop', defaultName),
    filters: [{ name: 'Arquivo ZIP', extensions: ['zip'] }],
  });
  if (canceled || !filePath) return { ok: false, canceled: true };

  try {
    const zipData = Buffer.from(files, 'base64');
    await fsp.writeFile(filePath, zipData);
    return { ok: true, path: filePath };
  } catch (e) {
    return { ok: false, error: e.message };
  }
});

// Abrir pasta de projetos no explorador de arquivos do sistema
ipcMain.handle('fs:openProjectsDir', async () => {
  await ensureProjectsDir();
  shell.openPath(PROJECTS_DIR);
  return { ok: true, path: PROJECTS_DIR };
});

// Abrir arquivo/pasta no explorador
ipcMain.handle('fs:openPath', async (_event, { filePath: fp }) => {
  shell.openPath(fp);
  return { ok: true };
});

// Mostrar arquivo no explorador (reveal)
ipcMain.handle('fs:revealInExplorer', async (_event, { filePath: fp }) => {
  shell.showItemInFolder(fp);
  return { ok: true };
});

// ─── Janela principal ────────────────────────────────────────────────────────
let mainWindow = null;

async function createWindow() {
  const port = await startServer();
  await ensureProjectsDir();

  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 800,
    minHeight: 600,
    title: 'Maikon Jurídico Pro',
    icon: path.join(__dirname, '..', 'public', 'icon-512.png'),
    backgroundColor: '#0d1117',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
      preload: path.join(__dirname, 'preload.cjs'),
      webSecurity: true,
    },
    show: false,
  });

  mainWindow.maximize();
  mainWindow.show();

  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: 'deny' };
  });

  mainWindow.loadURL(`http://127.0.0.1:${port}`);

  mainWindow.on('closed', () => {
    sessions.forEach((proc) => { try { proc.kill(); } catch {} });
    sessions.clear();
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  app.quit();
});

app.on('activate', () => {
  if (mainWindow === null) createWindow();
});
