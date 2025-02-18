import {Link} from '@remix-run/react';
import React from 'react';
const teddyBearsImage = '/assets/teddy_bears.webp';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Supporting Growth,{' '}
              <span className="text-[#FF7F50] relative">
                Embracing
                <span className="absolute bottom-0 left-0 w-full h-1 bg-[#FF7F50] rounded-full"></span>
              </span>
              <br />
              Differences
            </h1>
            <p className="text-gray-600 mb-8 max-w-xl">
              At Panda Puzzle, we empower families and children by providing
              tailored support and resources, fostering a world where every
              unique journey is celebrated and nurtured.
            </p>
            <Link
              to="/about"
              className="inline-block bg-[#2B4157] text-white px-8 py-3 rounded-md font-medium hover:bg-[#1d2d3d] transition-colors"
            >
              Get started
            </Link>
          </div>

          {/* Right Content - Image */}
          <div className="relative">
            <div className="bg-[#2B4157] absolute right-0 top-0 w-[120%] h-full rounded-bl-[100px] flex items-center justify-center">
              <img
                src={teddyBearsImage}
                alt="Children with stuffed animals"
                className="w-full h-full object-cover object-center mix-blend-overlay"
              />
            </div>
            {/* Decorative Star */}
            <div className="absolute bottom-10 left-0 text-red-500">
              <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
                <path
                  d="M20 0L23.5 16.5L40 20L23.5 23.5L20 40L16.5 23.5L0 20L16.5 16.5L20 0Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Logo Section */}
        <div className="mt-16 bg-[#A8D5D0] rounded-lg p-8">
          <div className="grid grid-cols-3 gap-8 items-center justify-items-center">
            {[1, 2, 3].map((index) => (
              <div key={index} className="w-32">
                <img
                  src="https://i0.wp.com/onegroupnetwork.com/wp-content/uploads/2020/09/dummy-logo-1b.png"
                  alt={`Partner logo ${index}`}
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
