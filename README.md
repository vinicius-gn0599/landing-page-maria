# Site Maria Antonia Psicologia

Landing page institucional baseada no briefing `maria-antonia-psicologia-briefing-site.md`.

## Estrutura

- `index.html`: pagina unica com as secoes institucionais.
- `assets/css/styles.css`: identidade visual, responsividade e componentes.
- `assets/js/main.js`: menu mobile e ano dinamico do rodape.
- `assets/images/`: placeholders de imagem para hero e galeria.
- `.github/workflows/`: esteira CI/CD com GitHub Actions.

## Como rodar localmente

1. Instale dependencias:

```bash
npm install
```

2. Rode os linters:

```bash
npm run lint
```

3. Abra `index.html` no navegador.

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
