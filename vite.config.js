import {defineConfig} from 'vite';
import hydrogen from '@shopify/hydrogen/plugin';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [hydrogen(), tsconfigPaths()],
  resolve: {
    alias: {
      '~': '/app',
    },
  },
  optimizeDeps: {
    include: ['@shopify/hydrogen', '@shopify/hydrogen-react'],
  },
  server: process.env.NODE_ENV === 'development' && {
    host: '0.0.0.0',
    port: parseInt(process.env.PORT || '3000'),
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
});
