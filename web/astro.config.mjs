// @ts-check
import { defineConfig } from 'astro/config';

// El contenido del portal vive fuera de web/ (en las carpetas de cada frente),
// así que se le permite al servidor de desarrollo leer el repositorio completo.
export default defineConfig({
  // Se publica en GitHub Pages como sitio de usuario (raíz del dominio).
  site: 'https://motivarcare.github.io',
  server: { port: 4321 },
  devToolbar: { enabled: false },
  vite: {
    server: { fs: { allow: ['..'] } },
  },
});
