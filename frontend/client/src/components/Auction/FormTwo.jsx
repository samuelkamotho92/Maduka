import React, { useContext } from 'react'
import { FormCtx } from './FormContext'
const FormTwo = () => {
    const {brand,setBrand,price,setPrice,description,setDescription,paymentMth,setpaymentMth,phoneNumber,setPhoneNumber} = useContext(FormCtx);

  return (
    <form className='formone'>
 <div className='mb-3 mt-4'>  
 <select className="select select-primary w-[300px]">
  <option disabled selected>Choose Brand?</option>
  <option>New</option>
  <option>Second hand</option>
</select>
 </div>
 <div className='mb-3 w-[300px]'>  
<label htmlFor='description'>
<span className="label-text">Enter Product Price?</span> 
</label>
<input type="text" placeholder="Price" className="input input-bordered w-full max-w-xs" 
value={price} 
onChange={(e) => {
    setDescription(e.target.value);
  }}
/> 
 </div>
 <div className='mb-3 w-[300px]'>  
<label htmlFor='price'>
<span className="label-text">Enter Your Phone Number?</span>
</label>
<input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" 
value={paymentMth} 
onChange={(e) => {
    setpaymentMth(e.target.value);
  }}
/> 
 </div>
 <div className='mb-3 w-[300px]'>  
<label htmlFor='description'>
<span className="label-text">Enter Product Description?</span> 
</label>
<textarea className="textarea textarea-primary" placeholder="Product Description"></textarea>
 </div>
    </form>
  )
}

export default FormTwo
