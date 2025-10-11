import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild', // Use esbuild instead of terser
    target: 'es2020',
    
    // Minimal rollup config
    rollupOptions: {
      output: {
        // Single chunk strategy - most reliable
        manualChunks: undefined
      }
    }
  }
});
