import React from 'react';
import { Medsos } from './Medsos';

export const Footer = () => {
  return (
    <div className="flex flex-col gap-1 bg-primary">
      <div className="text-center text-white py-5 mt-2">
        <h1>
          Develop 2022 by
          <a href="https://www.instagram.com/naufalprays77/" className="hover:text-blueSoft px-1">
            @naufalprays77
          </a>
          <br />
          version 4.1.1
        </h1>
        <div className="flex flex-row gap-2 justify-center pt-3">
          <Medsos />
        </div>
      </div>
    </div>
  );
};
