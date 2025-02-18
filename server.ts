import {createStorefrontClient, storefrontRedirect} from '@shopify/hydrogen';
import {
  createRequestHandler,
  getStorefrontHeaders,
} from '@shopify/remix-oxygen';
import * as build from '@remix-run/dev/server-build';

export default createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: (request: Request) => ({
    storefront: createStorefrontClient({
      publicStorefrontToken: process.env.PUBLIC_STOREFRONT_API_TOKEN,
      storeDomain: process.env.PUBLIC_STORE_DOMAIN,
      storefrontApiVersion: '2024-01',
      cache: {
        get: () => Promise.resolve(null),
        set: () => Promise.resolve(true),
        delete: () => Promise.resolve(true),
        put: () => Promise.resolve(),
        match: () => Promise.resolve(null),
        matchAll: () => Promise.resolve([]),
        add: () => Promise.resolve(),
        addAll: () => Promise.resolve(),
      },
      waitUntil: () => Promise.resolve(),
    }),
    env: process.env,
  }),
});
