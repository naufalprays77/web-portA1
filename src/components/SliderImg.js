import React from 'react';
import { Data_AboutIMG } from '../data';

export const SliderImg = () => {
  return (
    <div className="md:invisible md:hidden lg:visible lg:inline ">
      {Data_AboutIMG.map((item, i) => {
        return (
          <div>
            <img src={item.Img} className="w-[100%] " />
          </div>
        );
      })}
    </div>
  );
};
