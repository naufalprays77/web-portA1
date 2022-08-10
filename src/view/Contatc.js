import React from 'react';
import { Data_Contact } from '../data';

function Contact() {
  return (
    <section className="contact bg-tersier" id="contact" name="Contact">
      <div className="container mx-auto md:w-[90%] w-[100%] lg:w-[75%] py-10 md:py-32 px-4 md:px-0">
        <div className=" lg:w-[40%] md:w-[100%] text-primary">
          <h2 className="text-[45px] leading-[3rem] pb-16 font-bold">Let's get in touch</h2>
          <p className=" text-paragraph leading-[1.5rem] w-[95%] pb-8 ">It's an honor and pleasure if I can contribute to your team. Please share as much information as possible, so that we can get the most out of our first catch-up.</p>
          {Data_Contact.map((item, i) => {
            return (
              <div className="text-[30px] flex flex-row gap-4 py-5">
                <h3 className="font-semibold">{item.icon}</h3>
                <h4 className="text-sm"> {item.description}</h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
