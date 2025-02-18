import React, {useEffect, useState} from 'react';
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import './styles/app.css';
import {type LoaderFunctionArgs} from '@remix-run/node';
import {ShopifySalesChannel, Seo, useNonce} from '@shopify/hydrogen';
import Header from './components/Header';
import PageLayout from './components/PageLayout';
import Footer from './components/Footer';
import {AsideProvider} from './components/Aside';

export function links() {
  return [];
}

export async function loader({context}: LoaderFunctionArgs) {
  const layout = await (context.storefront as any).query(LAYOUT_QUERY);
  return {layout};
}

export default function App() {
  const nonce = useNonce();
  const data = useLoaderData<typeof loader>();
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Seo />
        <Meta />
        <Links />
      </head>
      <body className={isHydrated ? 'hydrated' : ''}>
        <AsideProvider>
          <PageLayout>
            <Header />
            <Outlet />
            <Footer />
          </PageLayout>
        </AsideProvider>
        <ScrollRestoration nonce={nonce} />
        <Scripts nonce={nonce} />
      </body>
    </html>
  );
}

const LAYOUT_QUERY = `#graphql
  query layout {
    shop {
      name
      description
    }
  }
`;
