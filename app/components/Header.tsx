import {Link} from '@remix-run/react';
import React from 'react';

export default function Header() {
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Panda Puzzle</span>
            <div className="flex items-center gap-2">
              <img
                className="h-24 w-auto"
                src="/images/logo.avif"
                alt="Panda Puzzle"
              />
            </div>
          </Link>
        </div>

        <div className="flex gap-8">
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            About
          </Link>
          <Link
            to="/autism-and-neurodiversity"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Autism and Neurodiversity
          </Link>
          <Link
            to="/support-and-resources"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Support and Resources
          </Link>
          <Link
            to="/education-and-legal"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Education and Legal
          </Link>
          <Link
            to="/community-and-blog"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Community & Blog
          </Link>
          <Link
            to="/shop"
            className="text-sm font-semibold leading-6 text-gray-900"
          >
            Shop
          </Link>
        </div>

        <div className="lg:flex lg:flex-1 lg:justify-end">
          <Link
            to="/contact"
            className="text-sm font-semibold leading-6 px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </nav>
    </header>
  );
}
