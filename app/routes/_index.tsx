import React from 'react';
import type {MetaFunction} from '@remix-run/node';
import Hero from '../components/sections/Hero';
import Features from '../components/sections/Features';
import AgeGroups from '../components/sections/AgeGroups';
import Products from '../components/sections/Products';
import About from '../components/sections/About';
import SupportTools from '../components/sections/SupportTools';
import Testimonials from '../components/sections/Testimonials';

export const meta: MetaFunction = () => {
  return [
    {title: 'Panda Puzzle'},
    {description: 'Supporting Growth, Embracing Differences'},
  ];
};

export default function Index() {
  return (
    <div>
      <Hero />
      <Features />
      <AgeGroups />
      <About />
      <Products />
      <SupportTools />
      <Testimonials />
    </div>
  );
}
