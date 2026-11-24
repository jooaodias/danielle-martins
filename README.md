# Danielle Martins — People & Management

Site profissional bilíngue (**Português / Inglês**) de **Danielle Martins** (*People & Management | Driving Performance through People*), construído com **React**, **TypeScript** e **Vite**.

- **Produção (Netlify):** https://danielle-martins.netlify.app
- **Repositório (GitHub):** https://github.com/jooaodias/danielle-martins

## Stack

- **Framework:** React 19 + Vite 8 + TypeScript
- **Tipografia self-hosted:** `@fontsource/bricolage-grotesque`, `@fontsource/source-sans-3`, `@fontsource/caveat`
- **Ícones:** `lucide-react`
- **Lint:** `oxlint`

## Estrutura principal

```text
danielle-martins/
├── public/
│   ├── danielle.jpg      # Foto principal e imagem de preview social (Open Graph)
│   └── robots.txt
├── src/
│   ├── data/profile.ts   # Conteúdo bilíngue (PT / EN), experiências e formação
│   ├── App.tsx           # Layout, alternância PT/EN, abas acessíveis e ações de contato
│   └── index.css         # Tokens de cor/tipografia e estilos responsivos
├── index.html            # SEO, Open Graph (LinkedIn/WhatsApp), Twitter Card e JSON-LD
├── netlify.toml          # Configuração de build e variáveis para deploy na Netlify
├── vite.config.ts        # Injeção opcional de VITE_SITE_URL no HTML de build
├── PRODUCT.md            # Contexto do produto e evidências de origem
└── DESIGN.md             # Sistema visual e tokens de design
```

## Rodando localmente

```bash
pnpm install
pnpm dev
```

O servidor local fica disponível em `http://localhost:5173/`.

## Scripts disponíveis

- `pnpm dev`: inicia o servidor de desenvolvimento Vite
- `pnpm lint`: executa o `oxlint` em `src/`
- `pnpm build`: valida tipos (`tsc -b`) e gera o bundle de produção em `dist/`
- `pnpm preview`: pré-visualiza localmente o build de produção

## SEO e previews sociais (LinkedIn / WhatsApp)

As tags Open Graph, Twitter Card e JSON-LD (`Person`) estão configuradas em `index.html`. Durante o build, `vite.config.ts` substitui `%SITE_URL%` pelo valor de `VITE_SITE_URL` (definido em `netlify.toml`), garantindo URLs absolutas em produção para título, descrição e foto (`danielle.jpg`).
