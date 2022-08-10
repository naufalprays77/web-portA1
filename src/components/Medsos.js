import React from 'react';
import { Data_Medsos } from '../data';

export const Medsos = () => {
  return (
    <div className="flex flex-row gap-2">
      {Data_Medsos.map((item, i) => {
        return (
          <div className="text-xl text-white hover:bg-secondary hover:text-black p-3 rounded-full">
            <a href={item.href}>{item.icon}</a>
          </div>
        );
      })}
    </div>
  );
};
