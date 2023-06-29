import React,{useState,useEffect,useContext} from 'react'
import bannerImg from '../../assets/online.png'
import banner2 from '../../assets/online2.jpg'
import { Button } from 'react-daisyui'
import {Filterprod} from '../../pages/Auctions'
const Banner = () => {
  // const value 
  // console.log(filterVal);
  const {filterVal,setfilterVal} = useContext(Filterprod);
  console.log(filterVal);
  return (
    <div className='flex justify-center text-center items-center bg-gradient-to-r from-[#ad5389] to-[#3c1053] text-slate-50 h-[300px]'>
<div className='flex-1 '>
<img src={bannerImg} alt='image banner'/>
    </div>
    <div className='flex flex-1 flex-col items-center justify-between'>
<div className='mb-6 text-center'>
    <p>Sell Anything in <Button>KENYA</Button></p>
</div>
<div className='form-control w-full max-w-xs'>
   <label className='label'>
<span className='label-text'>Search Product</span>
   </label>
   <input type='text'  placeholder='Type Here'  value={filterVal} className='input input-bordered w-full max-w-xs text-slate-900' onChange={(e)=>{setfilterVal(e.target.value)}} />
</div>
    </div>
    <div className='flex-1 justify-self-end'>
    <img src={banner2} alt='image banner' width='300' height='100px'/>
    </div>
    </div>
  )
}

export default Banner
