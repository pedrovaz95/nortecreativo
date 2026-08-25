import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';

// Configuración de Astro para desplegar en Cloudflare Pages.
// El adaptador "cloudflare" genera el build listo para ese entorno;
// no hace falta tocar nada aquí para que el deploy automático funcione.
export default defineConfig({
  site: 'https://nortecreativo.com',
  output: 'static',
  adapter: cloudflare(),
});
