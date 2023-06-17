import React from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
  return (
    <div className='relative'>
<div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
<div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6">
<div className='py-12 md:py-20'>
<div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
<h2 className="text-5xl font-bold mb-10 text-warning"><span className="text-[#ad5389] mr-1">Maduka</span>Services</h2>
</div>
<div className='max-w-sm mx-auto grid gap-4 md:grid-cols-2 lg:grid-cols-2 items-start md:max-w-2xl lg:max-w-none'>
<div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-80">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Auctions</h4>
              <p className="text-gray-600 text-center">
Lorem ipsum dolor sit amet consectetur adipisicing elit. In praesentium iure odio necessitatibus beatae temporibus dignissimos modi animi impedit. Sapiente aliquid saepe deserunt, voluptates tempora nemo provident laboriosam dignissimos inventore.
               </p>
               <Link to='/auctions' className='align-center mt-6'>Auctions Page</Link>
</div>
            <div className="relative flex flex-col items-center p-6 bg-white rounded shadow-xl h-80">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2" transform="translate(19.429 20.571)">
                    <circle className="stroke-current text-white" strokeLinecap="square" cx="12.571" cy="12.571" r="1.143" />
                    <path className="stroke-current text-white" d="M19.153 23.267c3.59-2.213 5.99-6.169 5.99-10.696C25.143 5.63 19.514 0 12.57 0 5.63 0 0 5.629 0 12.571c0 4.527 2.4 8.483 5.99 10.696" />
                    <path className="stroke-current text-blue-300" d="M16.161 18.406a6.848 6.848 0 003.268-5.835 6.857 6.857 0 00-6.858-6.857 6.857 6.857 0 00-6.857 6.857 6.848 6.848 0 003.268 5.835" />
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">Enterprises</h4>
              <p className="text-gray-600 text-center">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur harum animi voluptas atque provident eum laboriosam debitis hic earum vero commodi adipisci voluptate, et officiis, odio laudantium expedita! Autem, harum.</p>
           <Link to='/enterprise' className='align-center  mt-6'>Enterprises Page</Link>
            </div> 
</div>
</div>
   </div>
    </div>
  )
}

export default Services
