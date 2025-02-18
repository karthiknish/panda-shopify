import {defineConfig} from 'vite';
import {hydrogen} from '@shopify/hydrogen/vite';
import {oxygen} from '@shopify/mini-oxygen/vite';
import {vitePlugin as remix} from '@remix-run/dev';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    hydrogen(),
    oxygen(),
    remix({
      presets: [hydrogen.preset()],
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
        v3_lazyRouteDiscovery: true,
        v3_singleFetch: true,
      },
    }),
    tsconfigPaths(),
  ],
  build: {
    assetsInlineLimit: 0,
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      output: {
        dir: 'dist',
      },
    },
  },
  ssr: {
    noExternal: ['@shopify/hydrogen', '@shopify/hydrogen-react'],
    optimizeDeps: {
      include: [],
    },
  },
  resolve: {
    alias: {
      '~': '/app',
    },
  },
  optimizeDeps: {
    include: ['@shopify/hydrogen-react'],
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
