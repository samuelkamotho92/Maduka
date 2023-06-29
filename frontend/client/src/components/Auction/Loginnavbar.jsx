import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { MdNotifications, MdSubscriptions } from "react-icons/md";
import { FaShoppingBag } from "react-icons/fa";
import { Button } from "react-daisyui"; 
const Loginnavbar = () => {
  const [btn, setbtn] = useState();
  const [menu, setmenu] = useState();
  useEffect(() => {
    const getBtn = document.getElementById("hamburger-button");
    const getMenu = document.getElementById("mobile-menu");
    setbtn(getBtn);
    setmenu(getMenu);
  }, []);
  const toggleMenu = () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
  };
  return (
    <div className="h-50 shadow-md relative bg-gradient-to-r from-[#ad5389] to-[#3c1053] text-slate-50 fixed ">
      <div className="py-2.5 sm:px-5 sm:py-2 flex justify-between items-center">
        <div className="flex-1 justify-start items-center">
          <h2 className="text-lg ml-2">
            <Link to='/'>Maduka SMEs</Link>
            </h2>
        </div>
        <div className="hidden md:flex items-center justify-center flex-1">
          <div className="text-sm cursor-pointer m-2 sm:text-sm ml-2 mr-3">
            <p>
              Welcome Back <span>Samuel Kamotho</span>
            </p>
          </div>
          <div className="text-sm cursor-pointer m-2 sm:text-sm ml-2">
            <Link to="/admin/home">
                <div className="tooltip tooltip-bottom" data-tip='Dashboard'>
                <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      fontSize='2rem'
    >
      <path d="M13 3v6h8V3m-8 18h8V11h-8M3 21h8v-6H3m0-2h8V3H3v10z" />
    </svg>
                </div>
  
            </Link>
          </div>
          {/* <div className="text-lg cursor-pointer m-2 sm:text-sm ml-2 text-red-300">
            <Link to="/notifications" className="font-bold text-lg">
            <div className="tooltip tooltip-bottom" data-tip="Notifications">              
            <svg
      viewBox="0 0 512 512"
      fill="currentColor"
      height="1em"
      width="1em"
      fontSize='2rem'
    >
      <path
        fill="none"
        stroke="currentColor"
        fontSize='2rem'
        strokeMiterlimit={10}
        strokeWidth={32}
        d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
      />
      <path d="M365.2 313c-16.33-19.34-27.86-27.47-27.86-80.8 0-48.86-25.78-66.23-47-74.67a11.39 11.39 0 01-6.34-6.68C280.29 138.6 269.88 128 256 128s-24.31 10.6-28 22.86a11.35 11.35 0 01-6.33 6.68c-21.24 8.46-47 25.8-47 74.67 0 53.33-11.54 61.46-27.87 80.8-6.77 8-.65 23 11.19 23H354C365.77 336 371.94 321 365.2 313zM220.24 352a4 4 0 00-4 4.42C218.49 375.14 235.11 384 256 384c20.67 0 37.14-9.15 39.66-27.52a4 4 0 00-4-4.48z" />
    </svg>
            </div>
            </Link>
          </div>
          <div className="text-lg cursor-pointer m-2 sm:text-sm ml-2">
            <Link to="/profile">
                <div className="tooltip tooltip-bottom" data-tip="profile">              
            <svg
      viewBox="0 0 940 1000"
      fill="currentColor"
      height="1em"
      width="1em"
      fontSize='2rem'
    >
      <path d="M736 722c136 48 204 88.667 204 122v106H470 0V844c0-33.333 68-74 204-122 62.667-22.667 105.333-45.667 128-69s34-55 34-95c0-14.667-7.333-31-22-49s-25.333-42.333-32-73c-1.333-8-4.333-14-9-18s-9.333-6.667-14-8c-4.667-1.333-9.333-7-14-17s-7.667-24.333-9-43c0-10.667 1.667-19.333 5-26 3.333-6.667 6.333-10.667 9-12l4-4c-5.333-33.333-9.333-62.667-12-88-2.667-36 11-73.333 41-112s82.333-58 157-58 127.333 19.333 158 58 44 76 40 112l-12 88c12 5.333 18 19.333 18 42-1.333 18.667-4.333 33-9 43s-9.333 15.667-14 17c-4.667 1.333-9.333 4-14 8s-7.667 10-9 18c-5.333 32-15.667 56.667-31 74s-23 33.333-23 48c0 40 11.667 71.667 35 95s65.667 46.333 127 69" />
    </svg>
            </div>

            </Link>
          </div> */}
          <div className="text-lg cursor-pointer m-2 sm:text-sm ml-2">
            <Link to='/sell'>
       <div className="tooltip tooltip-bottom" data-tip='SELL ONLINE'>
          <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      height="1em"
      width="1em"
      fontSize='2rem'
    >
      <path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64v48H160v-48zm-48 48H48c-26.5 0-48 21.5-48 48v208c0 53 43 96 96 96h256c53 0 96-43 96-96V208c0-26.5-21.5-48-48-48h-64v-48C336 50.1 285.9 0 224 0S112 50.1 112 112v48zm24 96c-13.3 0-24-10.7-24-24s10.7-24 24-24 24 10.7 24 24-10.7 24-24 24zm200-24c0 13.3-10.7 24-24 24s-24-10.7-24-24 10.7-24 24-24 24 10.7 24 24z" />
    </svg>
        </div>
            </Link>

          </div>
        </div>
        <div className="hidden md:flex items-center justify-end flex-1">
          <div className="text-md cursor-pointer m-2 sm:text-sm ml-2  hover:bg-teal-400 p-1">
            <button>Log Out</button>
          </div>
        </div>
        <button
          id="hamburger-button"
          className="block text-3xl md:hidden cursor-pointer mx-3"
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <section
          id="mobile-menu"
          className="absolute top-0 bg-gradient-to-r from-[#ad5389] to-[#3c1053] text-slate-50 w-full text-5xl  flex-col justify-center
  origin-right animate-open-menu hidden
  "
          onClick={toggleMenu}
        >
          <button className="text-8xl self-end px-6">&times;</button>
          <nav className="flex flex-col">
            <div className="text-sm cursor-pointer m-2 sm:text-sm ml-2">
              <p>
                Welcome Back <span>Samuel Kamotho</span>
              </p>
            </div>
            <div className="text-sm cursor-pointer m-2 sm:text-sm ml-2">
              <Link to="/admin/home">Dashbord</Link>
            </div>
            {/* <div className="text-sm cursor-pointer m-2 sm:text-sm ml-2">
              <Link to="/profile">{BiUserCircle}</Link>
            </div> */}
          </nav>
        </section>
      </div>
    </div>
  );
};

export default Loginnavbar;
