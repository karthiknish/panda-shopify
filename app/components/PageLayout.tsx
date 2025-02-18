import React from 'react';
import {Link} from '@remix-run/react';
// import {AsideProvider} from './Aside';

function MobileMenuAside() {
  return (
    <aside className="lg:hidden">
      <nav className="flex flex-col gap-4 p-6">
        <Link to="/about" className="text-sm font-semibold">
          About
        </Link>
        <Link to="/autism-and-neurodiversity" className="text-sm font-semibold">
          Autism and Neurodiversity
        </Link>
        <Link to="/support-and-resources" className="text-sm font-semibold">
          Support and Resources
        </Link>
        <Link to="/education-and-legal" className="text-sm font-semibold">
          Education and Legal
        </Link>
        <Link to="/community-and-blog" className="text-sm font-semibold">
          Community & Blog
        </Link>
        <Link to="/shop" className="text-sm font-semibold">
          Shop
        </Link>
      </nav>
    </aside>
  );
}

export default function PageLayout({children}: {children: React.ReactNode}) {
  return (
    // <AsideProvider>
    <>
      <div className="min-h-screen flex flex-col">
        <main className="flex-grow">{children}</main>
      </div>
      <MobileMenuAside />
    </>
    // </AsideProvider>
  );
}
