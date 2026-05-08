# Briefing técnico para site — Maria Antônia Psicologia

Este documento reúne as informações técnicas e criativas necessárias para gerar um site institucional para a marca **Maria Antônia Psicologia**, a partir da direção visual escolhida: identidade orgânica, contemporânea, feminina, acolhedora e com símbolo floral.

Use este arquivo como contexto inicial no Chat do VS Code/Copilot/ChatGPT para criar a interface, os componentes, os estilos e os assets do site.

---

## 1. Resumo da marca

**Nome da marca:** Maria Antônia  
**Categoria:** Psicologia / Psicoterapia  
**Tipo de atendimento:** clínico, acolhedor, humanizado  
**Público principal:** mulheres  
**Nichos principais:** terapia feminina, carreira, relacionamentos  
**Personalidade da marca:** acolhimento, segurança, leveza, feminilidade, confiança  
**Estilo visual:** orgânico, contemporâneo, elegante, quente, delicado  
**Canais principais:** Instagram, cartão de visita, site institucional

### Direção conceitual

A marca deve transmitir a sensação de um espaço seguro para mulheres que buscam autoconhecimento, equilíbrio emocional, amadurecimento nas relações e fortalecimento pessoal/profissional. A comunicação visual deve ser sofisticada, mas acessível; feminina, mas não infantil; clínica, mas sem parecer fria.

### Palavras-chave visuais

- Acolhimento
- Florescimento
- Autocuidado
- Confiança
- Escuta
- Leveza
- Calor humano
- Feminilidade madura
- Desenvolvimento pessoal
- Sofisticação natural

---

## 2. Direção visual escolhida

A referência escolhida foi a opção com **ramo floral minimalista**, com composição leve e orgânica.

### Elementos principais

- Símbolo principal: ramo curvo com folhas e flor minimalista.
- Formas: linhas finas, curvas suaves, arcos e elementos botânicos.
- Sensação: crescimento emocional, autocuidado, acolhimento e florescimento.
- Estética: branding premium, editorial, humanizado e contemporâneo.
- Fundo: off-white e tons quentes claros.
- Destaques: terracota e marrom cacau.

---

## 3. Paleta de cores

### Cores principais

| Token | Nome | HEX | Uso recomendado |
|---|---|---:|---|
| `--ma-marrom-cacau` | Marrom cacau | `#5A2F1D` | textos principais, títulos, ícones, logo |
| `--ma-terracota` | Terracota | `#C96132` | CTAs, detalhes, hover, destaques |
| `--ma-caramelo` | Caramelo | `#D39156` | elementos secundários, linhas, detalhes botânicos |
| `--ma-bege-quente` | Bege quente | `#E8D5C3` | fundos suaves, cards, bordas |
| `--ma-off-white` | Off-white | `#FAF6EF` | fundo principal do site |
| `--ma-branco-quente` | Branco quente | `#FFFDF8` | cards, áreas claras, contraste suave |

### CSS variables

```css
:root {
  --ma-marrom-cacau: #5A2F1D;
  --ma-terracota: #C96132;
  --ma-caramelo: #D39156;
  --ma-bege-quente: #E8D5C3;
  --ma-off-white: #FAF6EF;
  --ma-branco-quente: #FFFDF8;

  --ma-text-primary: var(--ma-marrom-cacau);
  --ma-text-secondary: #7A4A34;
  --ma-bg: var(--ma-off-white);
  --ma-surface: var(--ma-branco-quente);
  --ma-border: rgba(90, 47, 29, 0.16);
  --ma-shadow: 0 24px 60px rgba(90, 47, 29, 0.10);
  --ma-radius-lg: 28px;
  --ma-radius-md: 18px;
  --ma-radius-sm: 12px;
}
```

### Tailwind theme sugerido

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ma: {
          brown: "#5A2F1D",
          terracotta: "#C96132",
          caramel: "#D39156",
          beige: "#E8D5C3",
          offwhite: "#FAF6EF",
          warmwhite: "#FFFDF8",
        },
      },
      borderRadius: {
        brand: "28px",
      },
      boxShadow: {
        brand: "0 24px 60px rgba(90, 47, 29, 0.10)",
      },
      fontFamily: {
        display: ["Cormorant Garamond", "serif"],
        sans: ["Manrope", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
```

---

## 4. Tipografia

Como a imagem de referência foi gerada, não há uma fonte exata identificável. Para reproduzir a estética, use fontes equivalentes com boa disponibilidade para web.

### Fonte principal — nome da marca e títulos

**Cormorant Garamond**

Uso recomendado:

- Logo textual: `Cormorant Garamond Regular` ou `Medium`
- Títulos hero: `Cormorant Garamond Regular`
- Frases editoriais: `Cormorant Garamond Italic`

Características:

- Elegante
- Feminina
- Editorial
- Sofisticada
- Boa para títulos e identidade visual

### Fonte secundária — navegação, corpo e interface

**Manrope**

Uso recomendado:

- Menu: `Manrope Medium`
- Corpo de texto: `Manrope Regular`
- Botões: `Manrope SemiBold`
- Subtítulo “PSICOLOGIA”: `Manrope Medium` com letter spacing alto

Características:

- Moderna
- Limpa
- Boa legibilidade digital
- Contemporânea
- Combina bem com uma serifada elegante

### Importação via Google Fonts

```tsx
// app/layout.tsx - Next.js App Router
import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Maria Antônia Psicologia",
  description: "Psicoterapia para mulheres com acolhimento, escuta e cuidado humanizado.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${manrope.variable}`}>{children}</body>
    </html>
  );
}
```

### CSS tipográfico

```css
body {
  font-family: var(--font-sans), system-ui, sans-serif;
  background: var(--ma-off-white);
  color: var(--ma-marrom-cacau);
}

.font-display {
  font-family: var(--font-display), serif;
}

.logo-name {
  font-family: var(--font-display), serif;
  font-weight: 400;
  letter-spacing: 0.02em;
}

.logo-subtitle {
  font-family: var(--font-sans), sans-serif;
  font-weight: 500;
  letter-spacing: 0.36em;
  text-transform: uppercase;
}
```

---

## 5. Estilo de interface do site

### Sensação geral

O site deve parecer um espaço de acolhimento: claro, respirável, calmo e confiável. Evitar visual hospitalar frio. Usar bastante respiro, curvas suaves, blocos arredondados e detalhes botânicos finos.

### Recomendações visuais

- Fundo principal em `#FAF6EF`.
- Cards em `#FFFDF8`.
- Títulos em `#5A2F1D`.
- CTAs em `#C96132`.
- Botões com borda arredondada, idealmente `999px`.
- Seções com formas orgânicas sutis em `#E8D5C3` com baixa opacidade.
- Usar imagens quentes, com luz natural, tons bege, terracota e marrom.
- Evitar banco de imagem com aparência muito corporativa.
- Evitar ícones genéricos de cérebro, quebra-cabeça ou borboleta clichê.
- Preferir ilustrações lineares botânicas e abstratas.

### Estilo dos botões

```tsx
<button className="rounded-full bg-ma-terracotta px-7 py-3 text-sm font-semibold text-ma-warmwhite shadow-brand transition hover:-translate-y-0.5 hover:bg-ma-brown">
  Agendar conversa
</button>
```

### Estilo dos cards

```tsx
<div className="rounded-brand border border-ma-brown/10 bg-ma-warmwhite p-8 shadow-brand">
  <h3 className="font-display text-3xl text-ma-brown">Terapia feminina</h3>
  <p className="mt-4 text-sm leading-7 text-ma-brown/75">
    Um espaço de escuta para compreender sua história, suas relações e seus movimentos internos.
  </p>
</div>
```

---

## 6. Arquitetura recomendada

### Stack sugerida

Use uma destas opções:

#### Opção preferencial

- **Next.js**
- **TypeScript**
- **Tailwind CSS**
- **next/font/google** para fontes
- **lucide-react** opcional para ícones auxiliares
- **Framer Motion** opcional para animações suaves

#### Alternativa simples

- **Vite**
- **React**
- **TypeScript**
- **Tailwind CSS**

### Estrutura sugerida de pastas

```txt
src/
  app/
    layout.tsx
    page.tsx
    globals.css
  components/
    Header.tsx
    Logo.tsx
    Hero.tsx
    SectionTitle.tsx
    ServiceCard.tsx
    AboutSection.tsx
    ApproachSection.tsx
    ServicesSection.tsx
    CTASection.tsx
    ContactSection.tsx
    Footer.tsx
  components/icons/
    FloralBranchIcon.tsx
    LeavesIcon.tsx
    CareHeartIcon.tsx
    LotusIcon.tsx
  data/
    site-content.ts
  lib/
    cn.ts
```

---

## 7. Mapa do site

Para começar, criar uma landing page institucional de página única.

### Seções recomendadas

1. **Header**
   - Logo
   - Navegação: Sobre, Abordagem, Temas, Contato
   - CTA: Agendar conversa

2. **Hero**
   - Título emocional e claro
   - Texto curto sobre psicoterapia para mulheres
   - CTA principal para WhatsApp/agendamento
   - CTA secundário para conhecer a abordagem
   - Elemento visual floral orgânico

3. **Sobre Maria Antônia**
   - Apresentação profissional
   - Espaço para CRP
   - Foto da psicóloga, se houver
   - Texto humanizado, sem promessas exageradas

4. **Abordagem terapêutica**
   - Explicar o atendimento clínico, acolhedor e humanizado
   - Evitar linguagem excessivamente técnica
   - Mostrar segurança, ética e sigilo

5. **Temas de atendimento**
   - Terapia feminina
   - Carreira
   - Relacionamentos
   - Autoestima e limites
   - Transições de vida

6. **Como funciona o atendimento**
   - Modalidade: online, presencial ou ambos
   - Duração média da sessão
   - Primeiro contato
   - Frequência
   - Orientação para agendamento

7. **CTA final**
   - Chamada acolhedora
   - Botão de agendamento

8. **Contato / Footer**
   - WhatsApp
   - Instagram
   - E-mail
   - CRP
   - Cidade/atendimento online, se aplicável
   - Links de política de privacidade, se houver formulário

---

## 8. Conteúdo-base para o site

Use os textos abaixo como ponto de partida. Eles podem ser ajustados pela profissional antes da publicação.

### Hero

**Título:**  
Psicoterapia para mulheres que desejam se escutar com mais acolhimento.

**Subtítulo:**  
Um espaço clínico, seguro e humanizado para cuidar das suas relações, da sua carreira e da forma como você se posiciona no mundo.

**CTA principal:**  
Agendar conversa

**CTA secundário:**  
Conhecer a abordagem

### Sobre

Maria Antônia oferece um atendimento psicológico acolhedor e humanizado, voltado para mulheres que buscam compreender suas emoções, seus vínculos e seus processos de mudança.

Seu trabalho une escuta clínica, cuidado ético e uma presença sensível para que cada paciente possa construir caminhos mais conscientes, seguros e coerentes com sua própria história.

> Inserir aqui informações reais sobre formação, CRP, abordagem teórica, cidade e modalidade de atendimento.

### Abordagem

A psicoterapia é um espaço de pausa, escuta e elaboração. O processo acontece no ritmo de cada pessoa, respeitando sua história, seus limites e suas possibilidades.

O atendimento é conduzido com sigilo, ética e uma escuta cuidadosa, favorecendo o autoconhecimento, o fortalecimento emocional e a construção de relações mais saudáveis.

### Cards de temas

#### Terapia feminina

Um espaço para refletir sobre identidade, autoestima, autocuidado, limites, sobrecarga, culpa e os muitos papéis vividos pelas mulheres.

#### Carreira

Apoio para lidar com escolhas profissionais, inseguranças, transições, posicionamento, cobrança excessiva e equilíbrio entre vida pessoal e trabalho.

#### Relacionamentos

Cuidado para compreender padrões afetivos, vínculos, comunicação, dependência emocional, limites e formas mais saudáveis de se relacionar.

### CTA final

Cuidar de si pode ser o primeiro passo para florescer com mais consciência, segurança e leveza.

Botão: **Agendar atendimento**

---

## 9. Observações éticas para site de psicologia

Antes de publicar, validar o conteúdo com a profissional e, se necessário, com o CRP correspondente.

Evitar:

- Promessas de cura ou resultado garantido.
- Linguagem sensacionalista.
- “Antes e depois”.
- Depoimentos de pacientes ou usuários como prova social.
- Exposição de casos clínicos identificáveis.
- Diagnósticos ou aconselhamentos personalizados em conteúdo público.

Referências úteis:

- CFP — Orientações sobre publicidade nas redes sociais: https://site.cfp.org.br/cfp-divulga-orientacoes-a-categoria-sobre-publicidade-nas-redes-sociais/
- Nota Técnica CFP nº 01/2022 — Uso Profissional das Redes Sociais: Publicidade e Cuidados Éticos: https://site.cfp.org.br/wp-content/uploads/2022/06/SEI_CFP-0612475-Nota-Tecnica.pdf

---

## 10. Componentes visuais recomendados

### Header

- Fundo translúcido ou off-white.
- Logo à esquerda.
- Menu simples.
- CTA arredondado à direita.
- Em mobile, usar menu compacto.

### Hero

Layout desktop:

- Coluna esquerda: título, subtítulo e CTAs.
- Coluna direita: card com elemento floral, formas orgânicas e/ou imagem acolhedora.

Layout mobile:

- Conteúdo empilhado.
- Logo e flor com menos detalhe.
- CTA logo após subtítulo.

### Cards

- Cards com fundo `#FFFDF8`.
- Borda `rgba(90, 47, 29, 0.12)`.
- Ícone no topo.
- Título em Cormorant Garamond.
- Texto em Manrope.

### Background decorativo

Usar formas orgânicas grandes com baixa opacidade:

```tsx
<div className="pointer-events-none absolute -right-24 top-24 h-72 w-72 rounded-full bg-ma-beige/50 blur-3xl" />
<div className="pointer-events-none absolute -left-20 bottom-20 h-80 w-80 rounded-full bg-ma-caramel/10 blur-3xl" />
```

---

## 11. Acessibilidade e UX

- Contraste mínimo adequado entre texto e fundo.
- Evitar texto marrom claro sobre bege claro.
- Botões com área clicável confortável: mínimo 44px de altura.
- Links com estado hover/focus visível.
- Usar `aria-label` em botões de redes sociais.
- Imagens com `alt` descritivo.
- SVGs decorativos podem usar `aria-hidden="true"`.
- Logo com texto alternativo: `Maria Antônia Psicologia`.
- Evitar animações rápidas ou excessivas.

---

## 12. SEO básico

### Title

```txt
Maria Antônia Psicologia | Psicoterapia para mulheres
```

### Description

```txt
Atendimento psicológico clínico, acolhedor e humanizado para mulheres. Terapia feminina, carreira, relacionamentos e autoconhecimento.
```

### Keywords internas

- psicóloga para mulheres
- psicoterapia feminina
- terapia para relacionamentos
- terapia para carreira
- psicóloga humanizada
- atendimento psicológico acolhedor

### Open Graph

```ts
export const metadata = {
  title: "Maria Antônia Psicologia | Psicoterapia para mulheres",
  description: "Atendimento psicológico clínico, acolhedor e humanizado para mulheres.",
  openGraph: {
    title: "Maria Antônia Psicologia",
    description: "Psicoterapia para mulheres com acolhimento, escuta e cuidado humanizado.",
    type: "website",
    locale: "pt_BR",
  },
};
```

---

## 13. Prompt para usar no Chat do VS Code

Copie e cole o prompt abaixo no Chat do VS Code junto com este arquivo Markdown.

```txt
Crie uma landing page institucional para a marca Maria Antônia Psicologia usando Next.js, TypeScript e Tailwind CSS.

Use o briefing técnico deste arquivo como fonte principal de identidade visual, paleta, tipografia, conteúdo e SVGs.

Requisitos:
- Criar uma página única elegante, responsiva e acessível.
- Usar as fontes Cormorant Garamond e Manrope via next/font/google.
- Configurar a paleta no Tailwind com os tokens da marca.
- Criar componentes separados para Header, Logo, Hero, AboutSection, ApproachSection, ServicesSection, CTASection, ContactSection e Footer.
- Criar componentes SVG React para os ícones: FloralBranchIcon, LeavesIcon, CareHeartIcon e LotusIcon.
- Usar fundo off-white, cards branco quente, títulos em marrom cacau e CTAs terracota.
- Evitar visual hospitalar frio; priorizar estética orgânica, acolhedora, feminina e contemporânea.
- Não usar depoimentos de pacientes nem promessas de cura.
- Incluir espaços editáveis para CRP, cidade, modalidade de atendimento, WhatsApp, Instagram e e-mail.
- O resultado precisa ficar pronto para produção, com código limpo, sem bibliotecas desnecessárias.
```

---

## 14. SVGs da identidade

Abaixo estão os SVGs sugeridos. Eles podem ser usados como arquivos `.svg` em `/public/icons` ou convertidos em componentes React dentro de `src/components/icons`.

### 14.1 Ícone principal — ramo floral

Uso sugerido:

- Logo/símbolo principal
- Avatar do Instagram
- Marca d’água no hero
- Detalhe no footer

```svg
<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">Ícone ramo floral Maria Antônia</title>
  <desc id="desc">Símbolo orgânico com ramo curvo, folhas e flor minimalista em tons terrosos.</desc>
  
<style>
  :root {
    --brown: #5A2F1D;
    --terracotta: #C96132;
    --caramel: #D39156;
    --beige: #E8D5C3;
    --offwhite: #FAF6EF;
  }
  .stroke-brown { stroke: var(--brown); }
  .stroke-terracotta { stroke: var(--terracotta); }
  .stroke-caramel { stroke: var(--caramel); }
  .fill-terracotta { fill: var(--terracotta); }
  .fill-caramel { fill: var(--caramel); }
  .fill-brown { fill: var(--brown); }
  .no-fill { fill: none; }
  .round { stroke-linecap: round; stroke-linejoin: round; }
</style>

  <rect width="512" height="512" fill="none"/>
  <!-- Haste principal em arco -->
  <path class="no-fill stroke-terracotta round" d="M145 392 C148 315 186 224 270 128" stroke-width="8"/>
  <!-- Curva de base acolhedora -->
  <path class="no-fill stroke-caramel round" d="M129 392 C184 423 270 412 326 365" stroke-width="5"/>
  <!-- Folhas esquerdas -->
  <path class="no-fill stroke-brown round" d="M181 290 C125 270 96 226 101 170 C154 185 190 228 181 290Z" stroke-width="5"/>
  <path class="no-fill stroke-brown round" d="M112 184 C138 219 157 250 179 286" stroke-width="3"/>
  <path class="no-fill stroke-brown round" d="M131 198 C126 221 128 244 137 267" stroke-width="2.5"/>
  <path class="no-fill stroke-brown round" d="M154 217 C148 241 149 263 160 282" stroke-width="2.5"/>

  <path class="no-fill stroke-caramel round" d="M207 225 C166 197 152 158 172 115 C211 139 230 178 207 225Z" stroke-width="5"/>
  <path class="no-fill stroke-caramel round" d="M174 119 C188 154 197 187 207 222" stroke-width="3"/>

  <!-- Folhas direitas -->
  <path class="no-fill stroke-terracotta round" d="M274 213 C317 175 363 166 402 192 C369 229 321 244 274 213Z" stroke-width="5"/>
  <path class="no-fill stroke-terracotta round" d="M284 210 C318 204 352 198 393 193" stroke-width="3"/>
  <path class="no-fill stroke-terracotta round" d="M317 190 C329 205 344 216 363 225" stroke-width="2.5"/>

  <path class="no-fill stroke-caramel round" d="M244 282 C280 272 311 284 329 315 C294 324 262 313 244 282Z" stroke-width="5"/>
  <path class="no-fill stroke-caramel round" d="M251 284 C276 296 298 305 324 314" stroke-width="3"/>

  <!-- Flor minimalista -->
  <path class="no-fill stroke-terracotta round" d="M279 126 C306 72 359 57 414 86 C377 129 330 150 279 126Z" stroke-width="5"/>
  <path class="no-fill stroke-terracotta round" d="M289 125 C327 112 362 99 405 86" stroke-width="3"/>
  <path class="no-fill stroke-terracotta round" d="M326 76 C331 101 341 121 358 140" stroke-width="2.5"/>
  <path class="no-fill stroke-terracotta round" d="M360 73 C354 98 354 120 364 141" stroke-width="2.5"/>

  <!-- Pontos decorativos -->
  <circle class="fill-terracotta" cx="126" cy="320" r="7"/>
  <circle class="fill-caramel" cx="110" cy="348" r="5"/>
  <circle class="fill-brown" cx="151" cy="345" r="4"/>
  <circle class="fill-caramel" cx="340" cy="94" r="5"/>
  <circle class="fill-terracotta" cx="374" cy="108" r="4"/>
</svg>

```

### 14.2 Ícone folhas

Uso sugerido:

- Card sobre crescimento/autoconhecimento
- Destaques visuais
- Seções secundárias

```svg
<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">Ícone folhas Maria Antônia</title>
  <desc id="desc">Ícone minimalista de folhas para crescimento, autocuidado e desenvolvimento pessoal.</desc>
  
<style>
  :root {
    --brown: #5A2F1D;
    --terracotta: #C96132;
    --caramel: #D39156;
    --beige: #E8D5C3;
    --offwhite: #FAF6EF;
  }
  .stroke-brown { stroke: var(--brown); }
  .stroke-terracotta { stroke: var(--terracotta); }
  .stroke-caramel { stroke: var(--caramel); }
  .fill-terracotta { fill: var(--terracotta); }
  .fill-caramel { fill: var(--caramel); }
  .fill-brown { fill: var(--brown); }
  .no-fill { fill: none; }
  .round { stroke-linecap: round; stroke-linejoin: round; }
</style>

  <rect width="512" height="512" fill="none"/>
  <path class="no-fill stroke-terracotta round" d="M256 405 C256 330 256 238 256 112" stroke-width="10"/>
  <path class="no-fill stroke-brown round" d="M257 214 C214 190 176 153 157 95 C211 105 251 144 257 214Z" stroke-width="8"/>
  <path class="no-fill stroke-brown round" d="M164 102 C197 141 225 177 255 211" stroke-width="4"/>
  <path class="no-fill stroke-caramel round" d="M257 267 C313 235 354 193 376 132 C317 143 270 188 257 267Z" stroke-width="8"/>
  <path class="no-fill stroke-caramel round" d="M369 141 C334 182 300 225 259 263" stroke-width="4"/>
  <path class="no-fill stroke-terracotta round" d="M256 342 C205 324 163 292 132 242 C184 239 230 272 256 342Z" stroke-width="8"/>
  <path class="no-fill stroke-terracotta round" d="M140 247 C181 279 217 310 255 339" stroke-width="4"/>
  <path class="no-fill stroke-brown round" d="M256 356 C303 346 341 321 372 281 C329 276 285 301 256 356Z" stroke-width="8"/>
  <path class="no-fill stroke-brown round" d="M366 286 C326 313 294 335 258 353" stroke-width="4"/>
</svg>

```

### 14.3 Ícone acolhimento/coração

Uso sugerido:

- Card sobre acolhimento
- Seção abordagem terapêutica
- Benefícios do processo

```svg
<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">Ícone acolhimento Maria Antônia</title>
  <desc id="desc">Ícone de acolhimento com coração e formas orgânicas de apoio emocional.</desc>
  
<style>
  :root {
    --brown: #5A2F1D;
    --terracotta: #C96132;
    --caramel: #D39156;
    --beige: #E8D5C3;
    --offwhite: #FAF6EF;
  }
  .stroke-brown { stroke: var(--brown); }
  .stroke-terracotta { stroke: var(--terracotta); }
  .stroke-caramel { stroke: var(--caramel); }
  .fill-terracotta { fill: var(--terracotta); }
  .fill-caramel { fill: var(--caramel); }
  .fill-brown { fill: var(--brown); }
  .no-fill { fill: none; }
  .round { stroke-linecap: round; stroke-linejoin: round; }
</style>

  <rect width="512" height="512" fill="none"/>
  <!-- coração superior -->
  <path class="no-fill stroke-terracotta round" d="M256 151 C246 126 213 120 198 143 C182 167 207 197 256 226 C305 197 330 167 314 143 C299 120 266 126 256 151Z" stroke-width="9"/>
  <!-- corpo/abraço -->
  <path class="no-fill stroke-brown round" d="M256 230 C218 270 192 319 183 377" stroke-width="9"/>
  <path class="no-fill stroke-brown round" d="M256 230 C294 270 320 319 329 377" stroke-width="9"/>
  <path class="no-fill stroke-caramel round" d="M184 377 C214 407 298 407 328 377" stroke-width="9"/>
  <!-- laços orgânicos -->
  <path class="no-fill stroke-terracotta round" d="M214 318 C172 294 147 256 156 219 C198 228 226 267 214 318Z" stroke-width="8"/>
  <path class="no-fill stroke-caramel round" d="M298 318 C340 294 365 256 356 219 C314 228 286 267 298 318Z" stroke-width="8"/>
  <path class="no-fill stroke-brown round" d="M206 323 C235 339 277 339 306 323" stroke-width="6"/>
  <circle class="fill-terracotta" cx="256" cy="274" r="5"/>
  <circle class="fill-terracotta" cx="256" cy="300" r="5"/>
  <circle class="fill-terracotta" cx="256" cy="326" r="5"/>
</svg>

```

### 14.4 Ícone flor/lótus

Uso sugerido:

- Card sobre florescimento emocional
- CTA final
- Detalhe decorativo

```svg
<?xml version="1.0" encoding="UTF-8"?>
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">Ícone flor/lótus Maria Antônia</title>
  <desc id="desc">Ícone de flor minimalista para leveza, equilíbrio e florescimento emocional.</desc>
  
<style>
  :root {
    --brown: #5A2F1D;
    --terracotta: #C96132;
    --caramel: #D39156;
    --beige: #E8D5C3;
    --offwhite: #FAF6EF;
  }
  .stroke-brown { stroke: var(--brown); }
  .stroke-terracotta { stroke: var(--terracotta); }
  .stroke-caramel { stroke: var(--caramel); }
  .fill-terracotta { fill: var(--terracotta); }
  .fill-caramel { fill: var(--caramel); }
  .fill-brown { fill: var(--brown); }
  .no-fill { fill: none; }
  .round { stroke-linecap: round; stroke-linejoin: round; }
</style>

  <rect width="512" height="512" fill="none"/>
  <!-- pétala central -->
  <path class="no-fill stroke-terracotta round" d="M256 111 C224 163 224 244 256 303 C288 244 288 163 256 111Z" stroke-width="8"/>
  <!-- pétalas laterais -->
  <path class="no-fill stroke-brown round" d="M251 300 C191 260 151 204 153 148 C213 169 250 229 251 300Z" stroke-width="8"/>
  <path class="no-fill stroke-brown round" d="M261 300 C321 260 361 204 359 148 C299 169 262 229 261 300Z" stroke-width="8"/>
  <path class="no-fill stroke-caramel round" d="M226 326 C157 323 104 288 78 233 C148 233 204 270 226 326Z" stroke-width="8"/>
  <path class="no-fill stroke-caramel round" d="M286 326 C355 323 408 288 434 233 C364 233 308 270 286 326Z" stroke-width="8"/>
  <!-- base -->
  <path class="no-fill stroke-terracotta round" d="M107 352 C180 404 332 404 405 352" stroke-width="8"/>
  <path class="no-fill stroke-brown round" d="M158 349 C203 377 309 377 354 349" stroke-width="6"/>
  <!-- detalhes -->
  <circle class="fill-terracotta" cx="256" cy="86" r="6"/>
  <circle class="fill-caramel" cx="230" cy="98" r="4"/>
  <circle class="fill-caramel" cx="282" cy="98" r="4"/>
</svg>

```

---

## 15. Modelo de componente React para converter SVG

Ao transformar os SVGs em componentes React, remova o `<?xml ... ?>`, mantenha o `viewBox` e troque atributos como `stroke-linecap` por `strokeLinecap` quando necessário.

Exemplo:

```tsx
import type { SVGProps } from "react";

export function FloralBranchIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      fill="none"
      {...props}
    >
      <path
        d="M145 392 C148 315 186 224 270 128"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
```

Recomendação: para os ícones do site, usar `currentColor` sempre que possível, assim a cor pode ser controlada por Tailwind:

```tsx
<FloralBranchIcon className="h-16 w-16 text-ma-terracotta" />
```

---

## 16. Checklist final de implementação

- [ ] Criar projeto Next.js com TypeScript e Tailwind.
- [ ] Configurar fontes Cormorant Garamond e Manrope.
- [ ] Configurar tokens de cor no Tailwind.
- [ ] Criar componentes principais.
- [ ] Criar componentes dos ícones SVG.
- [ ] Criar hero com CTA para WhatsApp.
- [ ] Criar cards para terapia feminina, carreira e relacionamentos.
- [ ] Adicionar seção sobre a psicóloga com campos editáveis.
- [ ] Adicionar seção de contato.
- [ ] Validar responsividade mobile.
- [ ] Validar contraste e acessibilidade.
- [ ] Revisar conteúdo com a profissional antes da publicação.
- [ ] Inserir CRP real antes de ir ao ar.
- [ ] Evitar depoimentos, promessas de cura ou linguagem sensacionalista.

---

## 17. Variáveis editáveis antes da publicação

```ts
export const siteConfig = {
  name: "Maria Antônia",
  professionalTitle: "Psicóloga",
  crp: "CRP 00/00000",
  instagram: "https://instagram.com/mariaantonia.psicologia",
  whatsapp: "https://wa.me/5500000000000",
  email: "contato@mariaantonia.com.br",
  city: "Cidade/UF",
  serviceMode: "Atendimento online e/ou presencial",
  heroTitle: "Psicoterapia para mulheres que desejam se escutar com mais acolhimento.",
  heroSubtitle:
    "Um espaço clínico, seguro e humanizado para cuidar das suas relações, da sua carreira e da forma como você se posiciona no mundo.",
};
```

---

## 18. Direção de layout resumida para IA/codegen

Crie uma landing page elegante, com estética editorial e orgânica. O visual deve combinar tipografia serifada refinada, espaços generosos, cards arredondados, paleta terrosa quente e ícones botânicos lineares. A interface precisa transmitir acolhimento, segurança e leveza para mulheres em busca de psicoterapia. Evite excesso de elementos, cores frias e ilustrações clínicas genéricas. Priorize uma experiência calma, clara, responsiva e profissional.
