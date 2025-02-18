import {createStorefrontClient, storefrontRedirect} from '@shopify/hydrogen';
import {
  createRequestHandler,
  getStorefrontHeaders,
} from '@shopify/remix-oxygen';
import * as build from '@remix-run/dev/server-build';

export default createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: () => ({
    storefront: createStorefrontClient({
      cache: () => new Map(),
      waitUntil: () => Promise.resolve(),
    }),
    env: process.env,
  }),
});
