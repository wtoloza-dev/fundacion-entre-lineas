// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Configuración para Deno
  adapter: undefined, // Usar el adaptador por defecto
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
  },
});
