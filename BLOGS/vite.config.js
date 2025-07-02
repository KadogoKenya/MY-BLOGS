import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Force Vite to resolve the CSS file correctly
      'react-quill/dist/quill.snow.css': 'react-quill/dist/quill.snow.css'
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "react-quill/dist/quill.snow.css";`
      }
    }
  }
});