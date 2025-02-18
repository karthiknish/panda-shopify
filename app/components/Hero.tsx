import {Link} from '@remix-run/react';
import React from 'react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Supporting Growth{' '}
              <span className="text-[#FF7F50] relative">
                Embracing
                <span className="absolute bottom-1 left-0 w-full h-1 bg-[#FF7F50]"></span>
              </span>
              <br />
              Differences
            </h1>
            <p className="text-gray-600 mb-8 max-w-xl text-lg">
              At Panda Puzzle, we empower families and children by providing
              tailored support and resources, fostering a world where every
              unique journey is celebrated and nurtured.
            </p>
            <div className="flex gap-4">
              <Link
                to="/about"
                className="inline-block bg-[#2B4157] text-white px-8 py-3 rounded-md font-medium hover:bg-[#1d2d3d] transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative h-[500px] md:h-[600px]">
            <div className="bg-[#2B4157] absolute right-0 top-0 w-[120%] h-full rounded-bl-[100px] overflow-hidden">
              <img
                src="/images/teddy_bears.webp"
                alt="Children with stuffed animals"
                className="w-full h-full object-cover mix-blend-overlay opacity-90"
              />
              <div className="absolute inset-0 bg-[#2B4157]/20"></div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#FF7F50]/10 rounded-full"></div>
            <div className="absolute top-4 right-8 w-16 h-16 bg-[#FF7F50]/10 rounded-full"></div>
          </div>
        </div>
      </div>

      {/* Trusted By Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <p className="text-center text-gray-500 text-sm mb-6">Trusted By</p>
        <div className="flex justify-center items-center gap-12 grayscale opacity-70">
          <div className="w-32 h-8 bg-gray-200 rounded"></div>
          <div className="w-32 h-8 bg-gray-200 rounded"></div>
          <div className="w-32 h-8 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>
  );
}
