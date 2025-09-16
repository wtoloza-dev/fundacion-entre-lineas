// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuración para GitHub Pages
  site: 'https://wtoloza-dev.github.io',
  base: '/fundacion-entre-lineas',
  output: 'static', // Generación estática
  build: {
    format: 'file', // Generar archivos estáticos
  },
  // Configuración de alias
  vite: {
    resolve: {
      alias: {
        '@': '/src',
        '@components': '/src/components',
        '@layouts': '/src/layouts',
        '@pages': '/src/pages',
        '@styles': '/src/styles',
        '@assets': '/src/assets',
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use 'src/styles/variables.scss' as *;`
        }
      }
    }
  },
});
