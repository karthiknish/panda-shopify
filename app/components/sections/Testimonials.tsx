import React from 'react';
import {motion} from 'framer-motion';
import testimonial from '../../assets/testimonial.jpg';

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        'The sensory toys from Panda Puzzle have helped my son feel more calm and focused during playtime.',
      author: 'Rachel W.',
      role: 'Parent of 2',
      image: testimonial,
    },
    {
      quote:
        'As a teacher, I love how these educational tools make learning fun and engaging for all my students.',
      author: 'James P.',
      role: 'Primary School Teacher',
      image: testimonial,
    },
    {
      quote:
        'The weighted blankets and sensory products have been game-changers for my therapy practice.',
      author: 'Dr. Sarah Chen',
      role: 'Pediatric Therapist',
      image: testimonial,
    },
    {
      quote:
        'Finally found toys that support both learning and emotional development. My daughter loves them!',
      author: 'Maria G.',
      role: 'Mother',
      image: testimonial,
    },
    {
      quote:
        'The quality and thoughtfulness behind each product shows. Highly recommend for any parent.',
      author: 'Thomas K.',
      role: 'Father & Educator',
      image: testimonial,
    },
    {
      quote: 'Excellent customer service and product knowledge.',
      author: 'Lisa B.',
      role: 'Parent',
      image: testimonial,
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{opacity: 0, y: -20}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.5}}
        >
          Hear What Families Are Saying{' '}
          <span className="text-[#FF7F50]">About Their Journey</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{opacity: 0, y: 20}}
              whileInView={{opacity: 1, y: 0}}
              transition={{duration: 0.5, delay: index * 0.1}}
              className="relative bg-[#80D0C7]/10 p-8 rounded-[40px] hover:shadow-lg transition-shadow overflow-hidden"
            >
              <div className="relative">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="w-1/2 h-1/2 rounded-2xl object-cover mb-6"
                />
                <div className="absolute -top-2 -right-2 w-24 h-24 bg-[#FF7F50]/10 rounded-full -z-10" />
              </div>
              <h3 className="text-xl font-semibold mb-1">
                {testimonial.author}
              </h3>
              <p className="text-sm text-gray-600 mb-4">{testimonial.role}</p>
              <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              <div className="absolute -bottom-2 -left-2 w-20 h-20 bg-[#2B4157]/10 rounded-full -z-10" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#FF7F50]/5 rounded-tl-[100px]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
