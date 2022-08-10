import React from 'react';
import { Data_Gallery } from '../data';

function Gallery() {
  return (
    <div id="Gallery" className="bg-tersier md:py-32 py-10" name="Gallery">
      <div className="w-[90%] lg:w-[75%] flex flex-col mx-auto">
        <h2 className="text-xl font-bold text-primary md:text-4xl mb-10 md:text-left text-center">Spending time with family or friends</h2>
        <div className="grid md:grid-cols-5 grid-cols-3 gap-3">
          {Data_Gallery.map((item, i) => {
            return (
              <div className="text-center ease-in-out duration-500">
                <img src={item.img} className="w-[100%] h-[150px] mx-auto duration-700 hover:scale-125 object-cover " />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Gallery;
