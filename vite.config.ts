import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '',  // Empty base for custom domain deployment
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
