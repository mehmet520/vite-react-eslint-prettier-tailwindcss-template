import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    outDir: 'dist',
  },
  resolve: {
    alias: {
      '@components': new URL('./src/components', import.meta.url).pathname,
      '@assets': new URL('./src/assets', import.meta.url).pathname,
    },
  },

  // Mit dieser Einstellung können Bilder im .png- oder .jpg-Format direkt mit import image from './cake.png' aufgerufen werden. - Bu ayarla .png, .jpg gibi görseller doğrudan import image from './cake.png' şeklinde çağrılabilir.
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg', '**/*.webp'],
  define: {
    'process.env.VITE_API_URL': JSON.stringify(process.env.VITE_API_URL),
  },
});
