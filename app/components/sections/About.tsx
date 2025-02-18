import React from 'react';
import {Link} from '@remix-run/react';
import {motion} from 'framer-motion';
export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{opacity: 0, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
          >
            <h2 className="text-3xl font-bold mb-2">
              The Heart <span className="text-[#FF7F50]">Behind</span>
              <br />
              Panda Puzzle
            </h2>
            <p className="text-gray-600 mt-6 text-lg">
              At Panda Puzzle, we're more than just a toy store. We're a
              dedicated team of parents, educators, and specialists who
              understand the unique journey of every child. Our mission is to
              provide carefully curated tools and resources that support
              development, learning, and joy.
            </p>
            <motion.div
              className="mt-8 flex items-center gap-8"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.2}}
            >
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF7F50]">1000+</div>
                <div className="text-sm text-gray-600 mt-1">
                  Products Available
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF7F50]">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#FF7F50]">100%</div>
                <div className="text-sm text-gray-600 mt-1">Satisfaction</div>
              </div>
            </motion.div>
            <motion.div
              className="mt-8"
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: 0.4}}
            >
              <Link
                to="/about"
                className="inline-block bg-[#2B4157] text-white px-8 py-3 rounded-full font-medium hover:bg-[#1d2d3d] transition-colors"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative"
            initial={{opacity: 0, x: 50}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.5}}
          >
            <div className="relative">
              <div className="absolute -left-4 top-4 bg-[#FF7F50] rounded-lg p-4 z-10">
                <div className="text-white font-bold text-2xl">1000+</div>
                <div className="text-white text-sm">Families</div>
              </div>
              <img
                src="/images/kidsgroup.jpg"
                alt="Children playing together"
                className="rounded-2xl w-full h-auto relative z-0"
              />
              <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-[#80D0C7]/20 rounded-full -z-10" />
              <div className="absolute -top-2 -left-2 w-24 h-24 bg-[#2B4157]/10 rounded-full -z-10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
