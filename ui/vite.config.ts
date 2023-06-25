import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@const': path.resolve(__dirname, './src/api/constants'),
      '@hook': path.resolve(__dirname, './src/hooks'),
      '@comp': path.resolve(__dirname, './src/components'),
      '@dto': path.resolve(__dirname, './src/api/dto'),
    },
  },
  server: {
    open: true
  }
})
