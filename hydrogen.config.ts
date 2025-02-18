import {defineConfig} from '@shopify/remix-oxygen';

export default defineConfig({
  shopify: {
    defaultCountryCode: 'US',
    defaultLanguageCode: 'EN',
    storeDomain:
      process.env.PUBLIC_STORE_DOMAIN || 'panda-puzzle.myshopify.com',
    storefrontToken: process.env.PUBLIC_STOREFRONT_API_TOKEN!,
    storefrontApiVersion: '2024-01',
  },
  build: {
    target: 'node',
  },
});
