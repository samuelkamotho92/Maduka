import React, { useContext } from 'react'
import { FormCtx } from './FormContext'
const FormTwo = () => {
    const {brand,setBrand,price,setPrice,description,setDescription,paymentMth,setpaymentMth,phoneNumber,setPhoneNumber} = useContext(FormCtx);

  return (
    <form className='flex justify-center items-center'>
      <div className='mb-3'>
<label htmlFor='brand'>
    brand
</label>
<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"
 value={brand}
 onChange={(e) => {
    setBrand(e.target.value);
  }}
 />
 </div>
 <div className='mb-3'>  
<label htmlFor='price'>
    {price}   
</label>
<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
value={price} 
onChange={(e) => {
    setPrice(e.target.value);
  }}
/> 
 </div>
 <div className='mb-3'>  
<label htmlFor='description'>
    {description}   
</label>
<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
value={description} 
onChange={(e) => {
    setDescription(e.target.value);
  }}
/> 
 </div>
 <div className='mb-3'>  
<label htmlFor='price'>
    {paymentMth}   
</label>
<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
value={paymentMth} 
onChange={(e) => {
    setpaymentMth(e.target.value);
  }}
/> 
 </div>
 <div className='mb-3'>  
<label htmlFor='price'>
    {phoneNumber}   
</label>
<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
value={description} 
onChange={(e) => {
    setPhoneNumber(e.target.value);
  }}
/> 
 </div>
    </form>
  )
}

export default FormTwo
