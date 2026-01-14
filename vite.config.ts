import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild',
    target: 'es2020',
    
    // Simplified config to prevent circular dependency issues
    rollupOptions: {
      output: {
        // Prevent the module initialization error
        manualChunks: {
          'react-core': ['react', 'react-dom'],
          'ui-libs': ['styled-components', 'framer-motion'],
          'bootstrap': ['bootstrap', 'react-bootstrap']
        }
      }
    }
  },
  
  // Fix module resolution
  resolve: {
    dedupe: ['react', 'react-dom']
  },
  
  // Optimize dependencies
  optimizeDeps: {
    include: ['react', 'react-dom', 'react/jsx-runtime']
  }
});
