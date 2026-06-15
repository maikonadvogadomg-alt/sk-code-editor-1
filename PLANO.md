# PLANO DO PROJETO: HTML/CSS/JS

> Gerado automaticamente pelo SK Code Editor em 15/06/2026, 17:02:15
> **109 arquivo(s)** | **~36.174 linhas de codigo**

---

## RESUMO EXECUTIVO

- **Tipo de aplicacao:** Aplicacao Web Frontend (React)
- **Frontend / Stack principal:** React + Vite, TypeScript, Tailwind CSS
- **Backend / Dados:** PostgreSQL (Neon)
- **Versao:** 1.0.0

**Para rodar o projeto:**
```bash
npm install && npm run dev
```

---

## ESTRUTURA DE ARQUIVOS

```
HTML/CSS/JS/
├── electron/
│   ├── main.cjs
│   └── preload.cjs
├── public/
│   └── sw.js
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── accordion.tsx
│   │   │   ├── alert-dialog.tsx
│   │   │   ├── alert.tsx
│   │   │   ├── aspect-ratio.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── breadcrumb.tsx
│   │   │   ├── button-group.tsx
│   │   │   ├── button.tsx
│   │   │   ├── calendar.tsx
│   │   │   ├── card.tsx
│   │   │   ├── carousel.tsx
│   │   │   ├── chart.tsx
│   │   │   ├── checkbox.tsx
│   │   │   ├── collapsible.tsx
│   │   │   ├── command.tsx
│   │   │   ├── context-menu.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── drawer.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── empty.tsx
│   │   │   ├── field.tsx
│   │   │   ├── form.tsx
│   │   │   ├── hover-card.tsx
│   │   │   ├── input-group.tsx
│   │   │   ├── input-otp.tsx
│   │   │   ├── input.tsx
│   │   │   ├── item.tsx
│   │   │   ├── kbd.tsx
│   │   │   ├── label.tsx
│   │   │   ├── menubar.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── pagination.tsx
│   │   │   ├── popover.tsx
│   │   │   ├── progress.tsx
│   │   │   ├── radio-group.tsx
│   │   │   ├── resizable.tsx
│   │   │   ├── scroll-area.tsx
│   │   │   ├── select.tsx
│   │   │   ├── separator.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── slider.tsx
│   │   │   ├── sonner.tsx
│   │   │   ├── spinner.tsx
│   │   │   ├── switch.tsx
│   │   │   ├── table.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── textarea.tsx
│   │   │   ├── toast.tsx
│   │   │   ├── toaster.tsx
│   │   │   ├── toggle-group.tsx
│   │   │   ├── toggle.tsx
│   │   │   └── tooltip.tsx
│   │   ├── AIChat.tsx
│   │   ├── AssistenteJuridico.tsx
│   │   ├── BuildPanel.tsx
│   │   ├── CampoLivre.tsx
│   │   ├── CodeEditor.tsx
│   │   ├── CombinarApps.tsx
│   │   ├── DatabasePanel.tsx
│   │   ├── DeployPanel.tsx
│   │   ├── DriveBackupPanel.tsx
│   │   ├── EditorLayout.tsx
│   │   ├── FileScanner.tsx
│   │   ├── FileTree.tsx
│   │   ├── GitHubPanel.tsx
│   │   ├── HTMLPlayground.tsx
│   │   ├── Manual.tsx
│   │   ├── PackageSearch.tsx
│   │   ├── Preview.tsx
│   │   ├── QuickPrompt.tsx
│   │   ├── RealTerminal.tsx
│   │   ├── SiteExtractor.tsx
│   │   ├── SKTerminal.tsx
│   │   ├── StreamTerminal.tsx
│   │   ├── SystemStatusPanel.tsx
│   │   ├── TemplateSelector.tsx
│   │   ├── Terminal.tsx
│   │   ├── VoiceCard.tsx
│   │   ├── VoiceMode.tsx
│   │   ├── WebContainerTerminal.tsx
│   │   └── XTermConnector.tsx
│   ├── hooks/
│   │   ├── use-mobile.tsx
│   │   └── use-toast.ts
│   ├── lib/
│   │   ├── ai-service.ts
│   │   ├── github-service.ts
│   │   ├── idb-storage.ts
│   │   ├── projects.ts
│   │   ├── store.ts
│   │   ├── templates.ts
│   │   ├── tts-service.ts
│   │   ├── utils.ts
│   │   ├── virtual-fs.ts
│   │   └── zip-service.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── components.json
├── index.html
├── package.json
├── replit.nix
├── SYSTEM_DOCS.md
├── tsconfig.json
└── vite.config.ts
```

---

## STACK TECNOLOGICO DETECTADO

- **Frontend:** React + Vite, TypeScript, Tailwind CSS
- **Backend:** PostgreSQL (Neon)
- **Todos os pacotes (79):** @isomorphic-git/lightning-fs, @monaco-editor/react, @neondatabase/serverless, @webcontainer/api, @xterm/addon-fit, @xterm/addon-web-links, @xterm/xterm, file-saver, highlight.js, jszip, react-markdown, rehype-highlight, remark-gfm, sql.js, @hookform/resolvers, @radix-ui/react-accordion, @radix-ui/react-alert-dialog, @radix-ui/react-aspect-ratio, @radix-ui/react-avatar, @radix-ui/react-checkbox, @radix-ui/react-collapsible, @radix-ui/react-context-menu, @radix-ui/react-dialog, @radix-ui/react-dropdown-menu, @radix-ui/react-hover-card, @radix-ui/react-label, @radix-ui/react-menubar, @radix-ui/react-navigation-menu, @radix-ui/react-popover, @radix-ui/react-progress, @radix-ui/react-radio-group, @radix-ui/react-scroll-area, @radix-ui/react-select, @radix-ui/react-separator, @radix-ui/react-slider, @radix-ui/react-slot, @radix-ui/react-switch, @radix-ui/react-tabs, @radix-ui/react-toast, @radix-ui/react-toggle, @radix-ui/react-toggle-group, @radix-ui/react-tooltip, @replit/vite-plugin-cartographer, @replit/vite-plugin-dev-banner, @replit/vite-plugin-runtime-error-modal, @tailwindcss/typography, @tailwindcss/vite, @tanstack/react-query, @types/file-saver, @types/node, @types/react, @types/react-dom, @vitejs/plugin-react, class-variance-authority, clsx, cmdk, date-fns, electron, electron-builder, embla-carousel-react, framer-motion, input-otp, lucide-react, next-themes, react, react-day-picker, react-dom, react-hook-form, react-icons, react-resizable-panels, recharts, sonner, tailwind-merge, tailwindcss, tw-animate-css, vaul, vite, wouter, zod

---

## ROTAS DA API (endpoints detectados automaticamente)

```
GET    /api/items  (em src/lib/templates.ts)
GET    /api/items/:id  (em src/lib/templates.ts)
POST   /api/items  (em src/lib/templates.ts)
GET    /api/health  (em src/lib/templates.ts)
USE    /api/auth  (em src/lib/templates.ts)
USE    /api/usuarios  (em src/lib/templates.ts)
POST   /register  (em src/lib/templates.ts)
POST   /login  (em src/lib/templates.ts)
GET    /perfil  (em src/lib/templates.ts)
GET    /api/provedores  (em src/lib/templates.ts)
POST   /api/chat  (em src/lib/templates.ts)
GET    /health  (em src/lib/templates.ts)
POST   /auth/login  (em src/lib/templates.ts)
POST   /auth/registro  (em src/lib/templates.ts)
GET    /clientes  (em src/lib/templates.ts)
GET    /clientes/:id  (em src/lib/templates.ts)
POST   /clientes  (em src/lib/templates.ts)
PUT    /clientes/:id  (em src/lib/templates.ts)
GET    /processos  (em src/lib/templates.ts)
GET    /processos/:id  (em src/lib/templates.ts)
POST   /processos  (em src/lib/templates.ts)
GET    /audiencias  (em src/lib/templates.ts)
POST   /audiencias  (em src/lib/templates.ts)
GET    /prazos/proximos  (em src/lib/templates.ts)
GET    /dashboard  (em src/lib/templates.ts)
GET    /api/registros  (em src/lib/templates.ts)
GET    /api/registros/:id  (em src/lib/templates.ts)
POST   /api/registros  (em src/lib/templates.ts)
PUT    /api/registros/:id  (em src/lib/templates.ts)
DELETE /api/registros/:id  (em src/lib/templates.ts)
```

---

## SCRIPTS DISPONIVEIS (package.json)

```bash
npm run dev           # vite --config vite.config.ts --host 0.0.0.0
npm run build         # vite build --config vite.config.ts
npm run serve         # vite preview --config vite.config.ts --host 0.0.0.0
npm run typecheck     # tsc -p tsconfig.json --noEmit
npm run build:zips    # node scripts/build-zips.mjs
npm run electron:build  # pnpm build && electron-builder --linux AppImage --win nsis --x64
npm run electron:build:linux  # pnpm build && electron-builder --linux AppImage --x64
npm run electron:build:win  # pnpm build && electron-builder --win nsis --x64
```

---

## VARIAVEIS DE AMBIENTE NECESSARIAS

Crie um arquivo `.env` na raiz com estas variaveis:

```env
PORT=seu_valor_aqui
ALLOWED_ORIGINS=seu_valor_aqui
JWT_SECRET=seu_valor_aqui
JWT_EXPIRES_IN=seu_valor_aqui
DATABASE_URL=seu_valor_aqui
GROQ_API_KEY=seu_valor_aqui
OPENAI_API_KEY=seu_valor_aqui
GEMINI_API_KEY=seu_valor_aqui
ANTHROPIC_API_KEY=seu_valor_aqui
XAI_API_KEY=seu_valor_aqui
OPENROUTER_API_KEY=seu_valor_aqui
PERPLEXITY_API_KEY=seu_valor_aqui
TELEGRAM_TOKEN=seu_valor_aqui
BASE_PATH=seu_valor_aqui
REPL_ID=seu_valor_aqui
```

---

## ARQUIVOS PRINCIPAIS

- `index.html` — Pagina HTML principal
- `src/App.tsx` — Componente raiz do frontend
- `src/main.tsx` — Arquivo principal

---

## GUIA COMPLETO — O QUE CADA PARTE DO PROJETO FAZ

> Esta secao explica, em linguagem simples, o que e para que serve cada pasta e cada arquivo.

### 📁 Raiz do Projeto (pasta principal)
> Arquivos de configuracao e pontos de entrada ficam aqui.

**`SYSTEM_DOCS.md`** _(292 linhas)_
Arquivo de documentacao em Markdown (texto formatado com #titulos, **negrito**, listas).

**`components.json`** _(20 linhas)_
Arquivo de dados ou configuracao no formato JSON (chave: valor).

**`index.html`** _(98 linhas)_
Pagina HTML raiz do projeto. E o ponto de entrada que o browser carrega primeiro.

**`package.json`** _(146 linhas)_
Registro de dependencias e scripts do projeto. Aqui ficam os comandos (npm run dev, npm start) e os pacotes instalados.

**`replit.nix`** _(8 linhas)_
Arquivo NIX — parte do projeto.

**`tsconfig.json`** _(24 linhas)_
Configuracao do TypeScript. Diz para o computador como interpretar o codigo .ts e .tsx.

**`vite.config.ts`** _(82 linhas)_
Configuracao do Vite (servidor de desenvolvimento). Define a porta, alias de caminhos e plugins usados.

---

### 📁 `electron/`
> Pasta 'electron' — agrupamento de arquivos relacionados.

**`main.cjs`** _(299 linhas)_
Arquivo CJS — parte do projeto.

**`preload.cjs`** _(36 linhas)_
Arquivo CJS — parte do projeto.

---

### 📁 `public/`
> Arquivos estaticos: imagens, icones, fontes, arquivos publicos.

**`sw.js`** _(186 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

---

### 📁 `src/`
> Codigo-fonte principal do projeto. Nao apague esta pasta.

**`App.tsx`** _(232 linhas)_
Componente RAIZ do frontend — e o pai de todos os outros componentes. Aqui ficam as rotas principais.

**`index.css`** _(167 linhas)_
Arquivo de estilos visuais — cores, tamanhos, fontes, espacamentos da interface.

**`main.tsx`** _(6 linhas)_
Ponto de entrada do React — monta o componente App na pagina HTML.

---

### 📁 `src/components/`
> Pecas visuais reutilizaveis da interface (botoes, cards, formularios...).

**`AIChat.tsx`** _(2523 linhas)_
Componente de CHAT/MENSAGENS — interface de conversa em tempo real.

**`AssistenteJuridico.tsx`** _(1343 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`BuildPanel.tsx`** _(1223 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CampoLivre.tsx`** _(763 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`CodeEditor.tsx`** _(154 linhas)_
Componente EDITOR — area de edicao de texto, codigo ou conteudo rico.

**`CombinarApps.tsx`** _(446 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`DatabasePanel.tsx`** _(954 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`DeployPanel.tsx`** _(981 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`DriveBackupPanel.tsx`** _(200 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`EditorLayout.tsx`** _(2753 linhas)_
Componente de LAYOUT — define a estrutura visual da pagina (cabecalho, sidebar, rodape). Envolve outros componentes.

**`FileScanner.tsx`** _(282 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`FileTree.tsx`** _(400 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`GitHubPanel.tsx`** _(969 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`HTMLPlayground.tsx`** _(228 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Manual.tsx`** _(2051 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`PackageSearch.tsx`** _(415 linhas)_
Componente de BUSCA — campo e logica para filtrar/encontrar conteudo.

**`Preview.tsx`** _(496 linhas)_
Componente de PAGINA/TELA — representa uma tela completa navegavel no app.

**`QuickPrompt.tsx`** _(274 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`RealTerminal.tsx`** _(724 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`SKTerminal.tsx`** _(401 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`SiteExtractor.tsx`** _(405 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`StreamTerminal.tsx`** _(594 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`SystemStatusPanel.tsx`** _(351 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`TemplateSelector.tsx`** _(589 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`Terminal.tsx`** _(1511 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`VoiceCard.tsx`** _(427 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`VoiceMode.tsx`** _(277 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`WebContainerTerminal.tsx`** _(333 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`XTermConnector.tsx`** _(276 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

### 📁 `src/hooks/`
> Hooks React customizados — logica reutilizavel de estado e efeitos.

**`use-mobile.tsx`** _(20 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`use-toast.ts`** _(192 linhas)_
HOOK React personalizado para gerenciar estado/comportamento de '-toast'.

---

### 📁 `src/lib/`
> Funcoes auxiliares reutilizaveis em varios lugares do projeto.

**`ai-service.ts`** _(392 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`github-service.ts`** _(237 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`idb-storage.ts`** _(72 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`projects.ts`** _(191 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`store.ts`** _(38 linhas)_
STORE de estado — gerencia o estado global do app (dados compartilhados entre telas).

**`templates.ts`** _(4532 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`tts-service.ts`** _(316 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

**`utils.ts`** _(7 linhas)_
Funcoes UTILITARIAS — ferramentas reutilizaveis de uso geral no projeto.

**`virtual-fs.ts`** _(200 linhas)_
Arquivo TypeScript/JavaScript — logica, funcoes ou modulo do projeto.

**`zip-service.ts`** _(217 linhas)_
Arquivo de SERVICO/API — funcoes para comunicar com o servidor ou API externa.

---

### 📁 `src/components/ui/`
> Componentes de UI (interface) basicos e genericos.

**`accordion.tsx`** _(56 linhas)_
Componente ACCORDION — secoes que abrem/fecham ao clicar, economizando espaco na tela.

**`alert-dialog.tsx`** _(140 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`alert.tsx`** _(60 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`aspect-ratio.tsx`** _(6 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`avatar.tsx`** _(51 linhas)_
Componente AVATAR — foto ou iniciais do usuario em formato circular.

**`badge.tsx`** _(44 linhas)_
Componente BADGE (etiqueta) — pequeno indicador com numero ou status (ex: '3 novas mensagens').

**`breadcrumb.tsx`** _(116 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`button-group.tsx`** _(84 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`button.tsx`** _(66 linhas)_
Componente de BOTAO — elemento clicavel reutilizavel com estilo padrao do projeto.

**`calendar.tsx`** _(214 linhas)_
Componente CALENDARIO/AGENDA — visualizacao e selecao de datas e eventos.

**`card.tsx`** _(77 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`carousel.tsx`** _(261 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`chart.tsx`** _(368 linhas)_
Componente de GRAFICO — visualizacao de dados em forma de grafico (barras, linhas, pizza...).

**`checkbox.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`collapsible.tsx`** _(12 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`command.tsx`** _(154 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`context-menu.tsx`** _(199 linhas)_
CONTEXT do React — mecanismo para compartilhar dados entre componentes sem passar por props.

**`dialog.tsx`** _(121 linhas)_
Componente DIALOG — caixa de dialogo que exige resposta do usuario (confirmar, cancelar...).

**`drawer.tsx`** _(117 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`dropdown-menu.tsx`** _(202 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`empty.tsx`** _(105 linhas)_
Componente de ESTADO VAZIO — exibido quando nao ha dados para mostrar (ex: 'Nenhum resultado encontrado').

**`field.tsx`** _(245 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`form.tsx`** _(177 linhas)_
Componente de FORMULARIO — campos de entrada de dados (texto, selecao, etc.) com validacao.

**`hover-card.tsx`** _(28 linhas)_
Componente CARD (cartao) — exibe uma informacao em um bloco visual com borda e sombra. Muito usado para listas de items.

**`input-group.tsx`** _(169 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input-otp.tsx`** _(70 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`input.tsx`** _(23 linhas)_
Componente de CAMPO DE ENTRADA — elemento de input com estilo personalizado.

**`item.tsx`** _(194 linhas)_
Componente de ITEM — representa um elemento individual dentro de uma lista ou colecao.

**`kbd.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`label.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`menubar.tsx`** _(255 linhas)_
Componente de MENU/DROPDOWN — lista de opcoes que aparece ao clicar em um botao.

**`navigation-menu.tsx`** _(129 linhas)_
Componente de NAVEGACAO/CABECALHO — barra superior com logo, menu e links de navegacao.

**`pagination.tsx`** _(118 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`popover.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`progress.tsx`** _(29 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`radio-group.tsx`** _(43 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`resizable.tsx`** _(46 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`scroll-area.tsx`** _(47 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`select.tsx`** _(160 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`separator.tsx`** _(30 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sheet.tsx`** _(141 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sidebar.tsx`** _(728 linhas)_
Componente de BARRA LATERAL — menu ou painel que aparece na lateral da tela.

**`skeleton.tsx`** _(16 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`slider.tsx`** _(27 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`sonner.tsx`** _(32 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`spinner.tsx`** _(17 linhas)_
Componente de CARREGAMENTO — animacao visual que aparece enquanto dados estao sendo buscados.

**`switch.tsx`** _(28 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`table.tsx`** _(121 linhas)_
Componente de TABELA — exibe dados em linhas e colunas.

**`tabs.tsx`** _(54 linhas)_
Componente de ABAS — permite alternar entre diferentes secoes de conteudo com clique.

**`textarea.tsx`** _(23 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toast.tsx`** _(128 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toaster.tsx`** _(34 linhas)_
Componente de NOTIFICACAO/ALERTA — mensagem temporaria que aparece na tela (ex: 'Salvo com sucesso!').

**`toggle-group.tsx`** _(62 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`toggle.tsx`** _(44 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

**`tooltip.tsx`** _(33 linhas)_
Componente React — parte visual reutilizavel da interface do usuario.

---

## CONTEXTO PARA IA (copie e cole para continuar o projeto)

> Use este bloco para explicar o projeto para qualquer IA ou desenvolvedor:

```
Projeto: HTML/CSS/JS
Tipo: Aplicacao Web Frontend (React)
Stack: React + Vite, TypeScript, Tailwind CSS, PostgreSQL (Neon)
Arquivos: 109 | Linhas: ~36.174
Rotas API: 30 endpoint(s) detectado(s)
Variaveis de ambiente necessarias: PORT, ALLOWED_ORIGINS, JWT_SECRET, JWT_EXPIRES_IN, DATABASE_URL, GROQ_API_KEY, OPENAI_API_KEY, GEMINI_API_KEY, ANTHROPIC_API_KEY, XAI_API_KEY, OPENROUTER_API_KEY, PERPLEXITY_API_KEY, TELEGRAM_TOKEN, BASE_PATH, REPL_ID

Estrutura principal:
  SYSTEM_DOCS.md
  components.json
  electron/main.cjs
  electron/preload.cjs
  index.html
  package.json
  public/sw.js
  replit.nix
  src/App.tsx
  src/components/AIChat.tsx
  src/components/AssistenteJuridico.tsx
  src/components/BuildPanel.tsx
  src/components/CampoLivre.tsx
  src/components/CodeEditor.tsx
  src/components/CombinarApps.tsx
  src/components/DatabasePanel.tsx
  src/components/DeployPanel.tsx
  src/components/DriveBackupPanel.tsx
  src/components/EditorLayout.tsx
  src/components/FileScanner.tsx
  src/components/FileTree.tsx
  src/components/GitHubPanel.tsx
  src/components/HTMLPlayground.tsx
  src/components/Manual.tsx
  src/components/PackageSearch.tsx
  src/components/Preview.tsx
  src/components/QuickPrompt.tsx
  src/components/RealTerminal.tsx
  src/components/SKTerminal.tsx
  src/components/SiteExtractor.tsx
  src/components/StreamTerminal.tsx
  src/components/SystemStatusPanel.tsx
  src/components/TemplateSelector.tsx
  src/components/Terminal.tsx
  src/components/VoiceCard.tsx
  src/components/VoiceMode.tsx
  src/components/WebContainerTerminal.tsx
  src/components/XTermConnector.tsx
  src/components/ui/accordion.tsx
  src/components/ui/alert-dialog.tsx
  src/components/ui/alert.tsx
  src/components/ui/aspect-ratio.tsx
  src/components/ui/avatar.tsx
  src/components/ui/badge.tsx
  src/components/ui/breadcrumb.tsx
  src/components/ui/button-group.tsx
  src/components/ui/button.tsx
  src/components/ui/calendar.tsx
  src/components/ui/card.tsx
  src/components/ui/carousel.tsx
  src/components/ui/chart.tsx
  src/components/ui/checkbox.tsx
  src/components/ui/collapsible.tsx
  src/components/ui/command.tsx
  src/components/ui/context-menu.tsx
  src/components/ui/dialog.tsx
  src/components/ui/drawer.tsx
  src/components/ui/dropdown-menu.tsx
  src/components/ui/empty.tsx
  src/components/ui/field.tsx
  src/components/ui/form.tsx
  src/components/ui/hover-card.tsx
  src/components/ui/input-group.tsx
  src/components/ui/input-otp.tsx
  src/components/ui/input.tsx
  src/components/ui/item.tsx
  src/components/ui/kbd.tsx
  src/components/ui/label.tsx
  src/components/ui/menubar.tsx
  src/components/ui/navigation-menu.tsx
  src/components/ui/pagination.tsx
  src/components/ui/popover.tsx
  src/components/ui/progress.tsx
  src/components/ui/radio-group.tsx
  src/components/ui/resizable.tsx
  src/components/ui/scroll-area.tsx
  src/components/ui/select.tsx
  src/components/ui/separator.tsx
  src/components/ui/sheet.tsx
  src/components/ui/sidebar.tsx
  src/components/ui/skeleton.tsx
  src/components/ui/slider.tsx
  src/components/ui/sonner.tsx
  src/components/ui/spinner.tsx
  src/components/ui/switch.tsx
  src/components/ui/table.tsx
  src/components/ui/tabs.tsx
  src/components/ui/textarea.tsx
  src/components/ui/toast.tsx
  src/components/ui/toaster.tsx
  src/components/ui/toggle-group.tsx
  src/components/ui/toggle.tsx
  src/components/ui/tooltip.tsx
  src/hooks/use-mobile.tsx
  src/hooks/use-toast.ts
  src/index.css
  src/lib/ai-service.ts
  src/lib/github-service.ts
  src/lib/idb-storage.ts
  src/lib/projects.ts
  src/lib/store.ts
  src/lib/templates.ts
  src/lib/tts-service.ts
  src/lib/utils.ts
  src/lib/virtual-fs.ts
  src/lib/zip-service.ts
  src/main.tsx
  tsconfig.json
  vite.config.ts
```

---

*Plano gerado pelo SK Code Editor — 15/06/2026, 17:02:15*