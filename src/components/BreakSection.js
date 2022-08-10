import React from 'react';
import { Button } from './Button';
import bgBreakSection from '../Assets/images/break-1.jpg';

export const BreakSection = () => {
  return (
    <div className="w-full text-center text-white h-[300px]">
      <div className="w-full bg-black/80 absolute">
        <img className="w-full h-[300px] object-cover mix-blend-overlay" src={bgBreakSection} alt="/" />
      </div>
      <div className="mx-auto text-white relative py-16">
        <h1 className="uppercase font-semibold md:text-5xl text-[1.7rem]">rest for a moment</h1>
        <h3 className="font-semibold md:text-xl text-sm md:pt-2 md:pb-12 pb-8 pt-0">find your character with our coffee</h3>
        <Button />
      </div>
    </div>
  );
};
