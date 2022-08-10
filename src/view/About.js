import React from 'react';
import { ContentAbout } from '../components/ContentAbout';
import { SliderImg } from '../components/SliderImg';
import { CooffeeMenu } from '../components/CooffeeMenu';

function About() {
  return (
    <div id="About" className="md:py-32 py-10 bg-tersier w-full h-full" name="About">
      <div className="flex flex-col md:flex-row md:gap-12 gap-5 justify-center w-[90%] lg:w-[75%] mx-auto">
        <SliderImg />
        <ContentAbout />
      </div>
      <div className="w-[90%] lg:w-[75%] mx-auto md:mt-20 mt-10 invisible hidden md:visible md:flex">
        <CooffeeMenu />
      </div>
    </div>
  );
}

export default About;
