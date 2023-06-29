import React from 'react'
import {FaMobile} from 'react-icons/fa'
import phone from '../../assets/Mobile.jpg'
import laptops from '../../assets/laptop.jpg'
import vehicles from '../../assets/vehicles.jpg'
import furniture from '../../assets/furnitures.jpg'
import './Auction.css'
import { Button } from 'react-daisyui'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import { getAuction } from '../../redux/apiCall'
import { useEffect,useContext } from 'react'
import {Filterprod} from '../../pages/Auctions';
const Main = () => {
  const dispatch = useDispatch();
  const {filterVal,setfilterVal} = useContext(Filterprod);
  console.log(filterVal);
useEffect(()=>{
  //fetch from db
  getAuction(dispatch);
},[dispatch])
console.log(useSelector((state)=>state));
console.log(useSelector((state)=>state.auction.auctions.data[0],'auctions'))
const auctions = useSelector((state)=>state.auction.auctions.data);
console.log(auctions[0],'getData');
const pro = auctions[0].findIndex((auction)=>auction.id == 4);
console.log(pro)
let prod;
for (let i = 0; i < auctions.length; i++) {
prod =  auctions[i];
}
console.log(prod);
let str;

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

{
  prod
  .filter(
    (pro)=>
    pro.category.toLowerCase().includes(filterVal)
    || pro.title.toLowerCase().includes(filterVal)
    || pro.description.toLowerCase().includes(filterVal)
  ).map(({title,category,brand,photos,price,phoneNumber,paymentMethod,description,Owner,id})=>
    (
<div className='flex-1 relative overflow-hidden border rounded-[20px] hover:opacity-90  h-[50vh] m-3' key={id}>
<Link to={`${id}`}>
<div className='rounded-[20px] w-[100%] object-cover h-[100%]'>
  {console.log(photos?.replace(/\[|\]/g, '').split(',')[0].replace(/"/g, ''))}
<img src={photos?.replace(/\[|\]/g, '').split(',')[0].replace(/"/g, '')} width="" alt='image' />
</div>
<div className='flex absolute w-[100%] h-[100%] left-0 top-0 items-center justify-center flex-col'>
<span className="inline-block animate-bounce rounded-full p-4 bg-teal-400 text-white text-sm">Latest Product
        <svg className="w-6 h-6 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokelinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 13l-7 7-7-7m14-8l-7 7-7-7" />
        </svg>
    </span>
<Button className='border text-gray-50 cursor-pointer rounded-sm hover:bg-teal-400'>SHOP NOW</Button>
<p className='text-black mb-[20px] font-medium'>{title}</p>
<span>{price}</span>
</div>
</Link>
</div> 
  ))
}



   </div>
    </div>
    </div>
  )
}

export default Main
