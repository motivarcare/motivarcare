// @ts-check
import { defineConfig } from 'astro/config';

// El contenido del portal vive fuera de web/ (en las carpetas de cada frente),
// así que se le permite al servidor de desarrollo leer el repositorio completo.
export default defineConfig({
  server: { port: 4321 },
  devToolbar: { enabled: false },
  vite: {
    server: { fs: { allow: ['..'] } },
  },
});
