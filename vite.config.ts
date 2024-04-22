/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), svgr()],
  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests.setup.ts',
    alias: {
      '@/': new URL('./src/', import.meta.url).pathname,
    },
  },
});
