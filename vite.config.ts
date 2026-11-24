import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

const siteUrl = (process.env.VITE_SITE_URL ?? '').replace(/\/+$/, '');

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'seo-site-url',
      transformIndexHtml(html) {
        return html.replaceAll('%SITE_URL%', siteUrl);
      },
    },
  ],
});
