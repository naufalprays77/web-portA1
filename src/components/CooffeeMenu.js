import React from 'react';
import { Data_MenuCoffee } from '../data';

export const CooffeeMenu = () => {
  return (
    <div className="grid grid-rows-3 grid-flow-col gap-5 md:grid-rows-2 lg:flex">
      {Data_MenuCoffee.map((item, i) => {
        return (
          <div className="flex flex-row gap-3 md:flex-col">
            <img src={item.img} className="w-[30%] md:w-[50%] self-center duration-700 hover:scale-125" />
            <h5 className="text-base self-center md:text-2xl">{item.description}</h5>
          </div>
        );
      })}
    </div>
  );
};
