import React from 'react'
import { Link } from 'react-router-dom'
import homeBanner from '../assets/homebanner.jpg'
const HeroHome = () => {
  return (
    <div className='relative'>
   <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        {/* <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg" className=''>
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg> */}
      </div>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 mt-6'>
      <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Get your business Online<br/>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ad5389] to-[#3c1053] text-5xl">Sell your products online and setup your business</span></h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Best Auctioning Site and Online Business plartform in Kenya </p>
                  <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <Link className="btn text-xl cursor-pointer m-2 sm:text-sm ml-2 hover:bg-teal-400 p-1" to="/register">Register</Link>
                </div>
                <div>
                  <Link className="btn text-xl cursor-pointer m-2 sm:text-sm ml-2 hover:bg-teal-400 p-1" to="/login">Log In</Link>
                </div>
              </div>     
            </div>
          </div>
      </div>
<div>
<div className='flex align-center justify-center'>
<img src={homeBanner} alt='maduka shop'  height='400' width='600' className=''  />
</div>
      </div>
    </div>
  )
}

export default HeroHome
