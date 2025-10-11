import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: process.env.NODE_ENV === 'production' 
          ? [['babel-plugin-transform-react-remove-prop-types', { removeImport: true }]]
          : []
      }
    })
  ],
  
  build: {
    // Ultra-aggressive minification
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn']
      }
    },
    
    // Target modern browsers for smaller bundles
    target: 'es2020',
    
    rollupOptions: {
      output: {
        // Ultra-granular chunking
        manualChunks: (id) => {
          // Vendor libraries
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react';
            }
            if (id.includes('framer-motion')) {
              return 'motion';
            }
            if (id.includes('bootstrap')) {
              return 'bootstrap';
            }
            if (id.includes('react-icons')) {
              return 'icons';
            }
            return 'vendor';
          }
          
          // Component chunks
          if (id.includes('src/components/')) {
            const componentName = id.split('/').pop()?.replace('.tsx', '');
            return `component-${componentName}`;
          }
        }
      }
    },
    
    // Optimize assets
    assetsInlineLimit: 1024, // Only inline very small assets
    chunkSizeWarningLimit: 300, // Very small chunks for mobile
    
    // Disable source maps in production
    sourcemap: false,
    
    // CSS optimization
    cssCodeSplit: true,
    cssMinify: 'esbuild',
    
    // Disable build reports for faster builds
    reportCompressedSize: false
  },
  
  // Optimize dependency bundling
  optimizeDeps: {
    include: ['react', 'react-dom'],
    exclude: [
      'framer-motion',
      'react-icons',
      'bootstrap',
      'react-bootstrap',
      'web-vitals'
    ]
  }
})
