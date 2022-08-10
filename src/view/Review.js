import React from 'react';
import { Data_Review } from '../data';

function Review() {
  return (
    <div id="Review" className="bg-secondary text-primary" name="Reviews">
      <div className="flex md:flex-row flex-col gap-5 text-center w-[80%] mx-auto md:py-32 py-12 ">
        {Data_Review.map((item, i) => {
          return (
            <div className=" hover:shadow-reviewShadow hover:translate-y-[-1rem] duration-700 p-10 ">
              <h2 className="font-bold text-2xl pb-4">{item.nameReviewer}</h2>
              <p className="font-normal text-1xl pb-4">{item.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Review;
