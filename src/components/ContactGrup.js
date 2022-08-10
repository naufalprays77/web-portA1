import React from 'react';
import { Data_Contact } from '../data';

export const ContactGrup = () => {
  return (
    <div>
      {Data_Contact.map((item, i) => {
        return (
          <div className="flex flex-row gap-5 w-[40%] p-6 hover:bg-primary hover:text-white cursor-pointer">
            <i className="text-2xl self-start  items-center">{item.icon}</i>
            <h5 className="text-left self-start ">{item.description}</h5>
          </div>
        );
      })}
    </div>
  );
};
