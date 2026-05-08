# Site Maria Antonia Psicologia

Landing page institucional baseada no briefing `maria-antonia-psicologia-briefing-site.md`.

## Estrutura

- `index.html`: pagina unica com as secoes institucionais.
- `assets/css/styles.css`: identidade visual, responsividade e componentes.
- `assets/js/main.js`: menu mobile, ano dinamico e carregamento de conteudo via JSON.
- `assets/images/`: placeholders de imagem para hero e galeria.
- `content/site-content.json`: textos, links e metadados editaveis do site.
- `.github/workflows/`: esteira CI/CD com GitHub Actions.

## Como editar os textos (forma recomendada)

1. Edite apenas o arquivo `content/site-content.json`.
2. Mantenha as chaves existentes para nao quebrar os bindings do HTML.
3. Para alterar links (WhatsApp, Instagram, e-mail), use a secao `links`.
4. O `index.html` tem fallback, mas o conteudo final da pagina vem do JSON carregado em `assets/js/main.js`.
5. Para visualizar alteracoes do JSON localmente, rode um servidor HTTP simples (abrir direto com `file://` pode bloquear o `fetch` em alguns navegadores).

## Como rodar localmente

1. Ative o Node 22:

```bash
nvm use
```

2. Instale dependencias:

```bash
npm install
```

3. Rode os linters:

```bash
npm run lint
```

4. Rode um servidor local:

```bash
python3 -m http.server 8080
```

5. Abra `http://localhost:8080`.

## CI/CD com GitHub Actions

### CI (`.github/workflows/ci.yml`)

- Roda em `push` para `main` e em `pull_request`.
- Executa:
  - `npm install`
  - `npm run lint` (HTMLHint + Stylelint)

### CD (`.github/workflows/deploy-pages.yml`)

- Roda em `push` para `main` e manualmente (`workflow_dispatch`).
- Gera pacote estatico em `dist/` com `index.html` + `assets/`.
- Publica o site automaticamente no GitHub Pages com:
  - `actions/configure-pages`
  - `actions/upload-pages-artifact`
  - `actions/deploy-pages`

## Recomendacao de deploy

### Melhor opcao para este projeto hoje

`GitHub Pages` e a opcao mais simples e custo-zero para esse site estatico:

- Integracao nativa com o repositorio.
- Deploy automatico a cada merge na branch principal.
- Sem necessidade de backend.

### Quando escolher outra opcao

1. `Vercel`: melhor se evoluir para Next.js com funcoes server-side.
2. `Netlify`: bom para formularios estaticos e preview de PR.
3. `Cloudflare Pages`: bom custo/performance global com CDN forte.

## Checklist antes de publicar

1. Substituir placeholders da galeria por imagens reais.
2. Atualizar CRP, cidade, WhatsApp, Instagram e e-mail.
3. Validar textos finais com a profissional responsavel.
4. Revisar conformidade etica com orientacoes do CFP/CRP.
