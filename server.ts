import {createRequestHandler} from '@remix-run/vercel';
import {createBuild} from '@remix-run/dev';

const build = await createBuild();

export default createRequestHandler({
  build,
  mode: process.env.NODE_ENV,
});
