import {createStorefrontClient} from '@shopify/hydrogen';
import {
  createRequestHandler,
  getStorefrontHeaders,
} from '@shopify/remix-oxygen';

export default createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (request: Request) => ({
    storefront: createStorefrontClient({
      publicStorefrontToken: process.env.PUBLIC_STOREFRONT_API_TOKEN,
      storeDomain: process.env.PUBLIC_STORE_DOMAIN,
      storefrontApiVersion: '2024-01',
      cache: new Map(),
      waitUntil: () => Promise.resolve(),
      fetch: fetch,
    }),
    env: process.env,
  }),
});
