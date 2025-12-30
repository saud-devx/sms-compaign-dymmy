import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    // Keep this for local development SPA routing
    historyApiFallback: true,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Output to a directory your server can serve
    outDir: 'dist',
    
    rollupOptions: {
      onwarn(warning, warn) {
        // Ignore specific warnings
        if (warning.code === 'SOURCEMAP_ERROR' && 
            warning.message.includes('/*#__PURE__*/')) {
          return;
        }
        // Let other warnings through
        warn(warning);
      },
      output: {
        // Split chunks for better performance
        manualChunks: {
          react: ['react', 'react-dom', 'react-router-dom'],
          ui: ['@radix-ui/react-toast', '@radix-ui/react-tooltip'],
          utilities: ['date-fns', 'clsx', 'tailwind-merge'],
        }
      }
    },
    sourcemap: true,
  },
}));
