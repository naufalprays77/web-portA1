import React, { useState } from 'react';
import { FaBars, FaRegWindowClose } from 'react-icons/fa';
import { Link } from 'react-scroll';

export const Header = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const handleClose = () => setNav(!nav);

  window.onscroll = () => {
    if (window.scrollY > 0) {
      document.getElementById('header').style.backgroundColor = '#512A10';
    } else {
      document.getElementById('header').style.backgroundColor = 'transparent';
    }
  };

  return (
    <div className="w-screen h-[100px] z-10 fixed drop-shadow-lg text-white" id="header">
      <div className="flex justify-between items-center w-[90%] h-full mx-auto">
        <div className="flex items-center">
          <Link to="Home" smooth={true} duration={500}>
            <h1 className="text-3xl font-bold mr-4 sm:text-4xl cursor-pointer">LOGO</h1>
          </Link>
        </div>
        <div className="hidden md:flex pr-4">
          <ul className="flex flex-row gap-2 justify-center text-xl  ">
            <li className="hover:bg-white hover:text-black py-1 px-6 rounded-full cursor-pointer ease-in duration-300">
              <Link to="Home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="hover:bg-white hover:text-black py-1 px-6 rounded-full cursor-pointer ease-in duration-300">
              <Link to="About" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="hover:bg-white hover:text-black py-1 px-6 rounded-full cursor-pointer ease-in duration-300">
              <Link to="Gallery" smooth={true} duration={500}>
                Gallery
              </Link>
            </li>
            <li className="hover:bg-white hover:text-black py-1 px-6 rounded-full cursor-pointer ease-in duration-300">
              <Link to="Reviews" smooth={true} duration={500}>
                Reviews
              </Link>
            </li>
            <li className="hover:bg-white hover:text-black py-1 px-6 rounded-full cursor-pointer ease-in duration-300">
              <Link to="Contact" smooth={true} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="md:hidden mr-4" onClick={handleClick}>
          {!nav ? <FaBars className="w-5" /> : <FaRegWindowClose className="w-5" />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-primary w-full py-8 flex flex-col gap-3 justify-center text-xl text-center'}>
        <li className="hover:bg-white w-fit mx-auto hover:text-black py-1 px-6 rounded-full cursor-pointer ease-in duration-300">
          <Link to="Home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="hover:bg-white w-fit mx-auto hover:text-black py-1 px-6 rounded-full cursor-pointer ease-in duration-300">
          <Link to="About" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="hover:bg-white w-fit mx-auto hover:text-black py-1 px-6 rounded-full cursor-pointer ease-in duration-300">
          <Link to="Gallery" smooth={true} duration={500}>
            Gallery
          </Link>
        </li>
        <li className="hover:bg-white w-fit mx-auto hover:text-black py-1 px-6 rounded-full cursor-pointer ease-in duration-300">
          <Link to="Reviews" smooth={true} duration={500}>
            Reviews
          </Link>
        </li>
        <li className="hover:bg-white w-fit mx-auto hover:text-black py-1 px-6 rounded-full cursor-pointer ease-in duration-300">
          <Link to="Contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};
