import {createStorefrontClient, storefrontRedirect} from '@shopify/hydrogen';
import {
  createRequestHandler,
  getStorefrontHeaders,
} from '@shopify/remix-oxygen';
import {createBuild} from '@remix-run/dev/server-build';

const build = await createBuild();

export default createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
  getLoadContext: () => ({}),
});
