import React from 'react';
import { Header } from '../components/Header';
import { Button } from '../components/Button';
import bgHome from '../Assets/images/bg-home.jpg';

function Home() {
  return (
    <div id="Home" className="w-full min-h-[100vh]" name="Home">
      <Header />
      <div className="w-full h-[700px] bg-black/80 absolute min-h-[100vh]">
        <img className="w-full h-full object-cover mix-blend-overlay" src={bgHome} alt="/" />
      </div>

      <div className="max-w-[1240px] mx-auto text-white relative">
        <div className="px-4 py-12">
          <div className="flex flex-col text-center pt-48 w-[100%] mx-auto text-white">
            <h3 className="text-2xl md:text-5xl font-semibold md:p-8 p-2 ">De ' Chocohips 97</h3>
            <h1 className="text-4xl md:text-7xl font-bold md:pb-20 pb-10  mx-auto">
              It's Great Day For <br />
              Coffee
            </h1>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
