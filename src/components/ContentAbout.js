import React from 'react';
import { Service } from './Service';
import { CooffeeMenu } from './CooffeeMenu';

export const ContentAbout = () => {
  return (
    <div className="w-[100%] text-primary">
      <h1 className="text-xl font-normal ">why choose us?</h1>
      <h2 className="text-4xl font-bold pt-2">The Best Coffee Maker In The Town</h2>
      <p className="md:my-10 my-5 md:text-xl text-sm font-normal">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      <div className="md:hidden md:invisible my-4">
        <CooffeeMenu />
      </div>
      <div>
        <Service />
      </div>
    </div>
  );
};
