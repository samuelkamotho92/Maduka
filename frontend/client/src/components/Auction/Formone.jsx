import React,{useContext} from 'react'
import {FormCtx} from './FormContext';
import './Auction.css'
const Formone = () => {
    // console.log(FormContext)
    const {title,setTitle,category,setCategory,photos,setPhotos} = useContext(FormCtx);
  return (
    <form className='formone'>
         <div className="mb-3">
         <label className="label">
    <span className="label-text">Enter Product Title?</span>
  </label>
        <input type="text" placeholder="Product Title" className="input input-bordered input-primary w-[300px]" value={title} />
      </div>
      <div className="mb-3">
  <select className="select select-primary w-[300px]">
  <option disabled selected>Choose your Product Category</option>
  <option>phone gadgets</option>
  <option>Laptop and Computers</option>
  <option>Furnitures</option>
  <option>Vehicles</option>
</select>
      </div>
      <div className="mb-3 w-[300px] mt-4px">
        <label htmlFor="title" className="form-label">
          photos
        </label>
        <input
          type="file"
          value={photos}
          onChange={(e) => {
            setPhotos(e.target.value);
          }}
          className="form-control"
          aria-describedby="emailHelp"
        />
      </div>
    </form>
  )
}

export default Formone
