import React from 'react';
import { Data_Service } from '../data';

export const Service = () => {
  return (
    <div className="flex md:flex-row flex-col md:gap-8 gap-4 mt-8 ">
      {Data_Service.map((item, i) => {
        return (
          <div className="flex flex-col bg-secondary py-4 px-8 hover:shadow-randomShadow">
            <i className="text-4xl self-center">{item.icon}</i>
            <h5 className="text-lg self-center">{item.description}</h5>
          </div>
        );
      })}
    </div>
  );
};
