import React, { useContext } from 'react'
import { FormCtx } from './FormContext'
import {useForm} from 'react-hook-form'
import {useDispatch,useSelector} from 'react-redux';
import { createAuction } from '../../redux/apiCall';
import { useNavigate } from 'react-router-dom';
const FormTwo = () => {
  const navigate = useNavigate();
    const {brand,setBrand,price,setPrice,description,setDescription,paymentMth,setpaymentMth,phoneNumber,setPhoneNumber,title,setTitle,setCategory,setPhotos,category,photos} = useContext(FormCtx);
    const Owner = useSelector((state)=>state.user?.currentUser?.data.username);
    const dispatch = useDispatch();
    const handleClick = (e)=>{
  e.preventDefault();
createAuction({brand,price,description,paymentMth,phoneNumber,title,category,photos,Owner})
setBrand('');
setPrice('');
setDescription('');
setpaymentMth('');
setPhoneNumber('');
setTitle('');
setCategory('');
setPhotos('');
 // console.log(title,brand,price,description,paymentMth,title,category,photos,user);
navigate('/auctions');
}


  return (
    <form className='formone' onSubmit={handleClick}>
 <div className='mb-3 w-[300px]'>  
 <label htmlFor='Price'>
<span className="label-text">Choose Brand?</span> 
</label>
 <select className="select select-primary w-[300px]" id='brand' onChange={(e)=>setBrand(e.target.value)} required>
  <option disabled selected>{brand}</option>
  <option>New</option>
  <option>Second hand</option>
</select>
 </div>
 <div className='mb-3 w-[300px]'  >  
<label htmlFor='Price'>
<span className="label-text">Enter Product Price?</span> 
</label>
<input type="text" value={price} placeholder={price} id='price'  className="input input-bordered w-full max-w-xs   text-black" 
onChange={(e)=>setPrice(e.target.value)}
  required
/> 
 </div>
 <div className='mb-3 w-[300px]'>  
<label htmlFor='price'>
<span className="label-text">Enter Your Phone Number?</span>
</label>
<input type="text" value={phoneNumber} placeholder={phoneNumber} className="input input-bordered w-full max-w-xs  text-black"
id='phoneNumber' 
onChange={(e)=>setPhoneNumber(e.target.value)}
/> 
 </div>
 <div className='mb-3 w-[300px]'>  
 <label htmlFor='Price'>
<span className="label-text">Choose Payment Method</span> 
</label>
<select className="select select-primary w-[300px]" id='paymentMth' value={paymentMth} onChange={(e)=>setpaymentMth(e.target.value)} required>
  <option disabled selected>{paymentMth}</option>
  <option>Mpesa</option>
  <option>On Cash</option>
</select>
 </div>
 <div className='mb-3 w-[300px]'>  
<label htmlFor='description'>
<span className="label-text">Enter Product Description?</span> 
</label>
<textarea className="textarea textarea-primary  text-black" value={description}  placeholder={description} id='description' onChange={(e)=>setDescription(e.target.value)} required></textarea>
 </div>
 <button type='submit'  className='bg-green-400 p-3 rounded-md'>Confirm and Submit</button>
    </form>
  )
}

export default FormTwo
