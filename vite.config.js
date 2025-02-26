import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/example-react-portfolio/', // Replace with your GitHub repository name
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
});