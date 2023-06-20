import React from 'react'
import {FaMobile} from 'react-icons/fa'
import phone from '../../assets/Mobile.jpg'
import laptops from '../../assets/laptop.jpg'
import vehicles from '../../assets/vehicles.jpg'
import furniture from '../../assets/furnitures.jpg'
import './Auction.css'
const Main = () => {
  return (
    <div className='main m-7'>   
<div className='filter shadow-md '>
<div className='category'>
<p>
<img src={phone} alt="phone"  height='50px' width='50px' className='rounded'/>
</p>
<h3>Mobile Phones </h3>
<i>
<svg
      viewBox="0 0 1024 1024"
      fill=""
      height="1em"
      width="1em"
      fontSize='2rem'
    >
      <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
    </svg>    
</i> 
</div>
<div className='category'>
<p>
<img src={laptops} alt="laptops"  height='50px' width='50px' className='rounded'/>
</p>
<h3>Laptops</h3>
<i>
<svg
      viewBox="0 0 1024 1024"
      fill=""
      height="1em"
      width="1em"
      fontSize='2rem'
    >
      <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
    </svg>    
</i> 
</div>   
<div className='category'>
<p>
<img src={vehicles} alt="phone"  height='50px' width='50px' className='rounded'/>
</p>
<h3>Vehicles</h3>
<i>
<svg
      viewBox="0 0 1024 1024"
      fill=""
      height="1em"
      width="1em"
      fontSize='2rem'
    >
      <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
    </svg>    
</i> 
</div>
<div className='category'>
<p>
<img src={furniture} alt="phone"  height='50px' width='50px' className='rounded'/>
</p>
<h3>Furnitures</h3>
<i>
<svg
      viewBox="0 0 1024 1024"
      fill=""
      height="1em"
      width="1em"
      fontSize='2rem'
    >
      <path d="M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" />
    </svg>    
</i> 
</div>
    </div>
    <div className='products'>
        <h1 className='text-center'>Category</h1>
   <div className='product'>
<div>
<div className='image'>

</div>
<div className='content'>
<p className='title'>Title</p>
<span>20000ksh</span>
</div>
</div>
<div>
    Product Two
</div>
<div>
    Product Three
</div>
<div>
    Product Four
</div>
<p></p>
   </div>
    </div>
    </div>
  )
}

export default Main
