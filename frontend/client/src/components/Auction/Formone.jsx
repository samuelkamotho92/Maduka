import React,{useContext} from 'react'
import {FormCtx} from './FormContext';
import './Auction.css'
const Formone = () => {
    // console.log(FormContext)
    const {title,setTitle,category,setCategory,photos,setPhotos} = useContext(FormCtx);
  return (
    <form className='formone'>
         <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Title
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"
 value={title}
 onChange={(e) => {
    setTitle(e.target.value);
  }}
 />
      </div>
      <div className="mb-3">
        <label htmlFor="Category" className="form-label">
          Category
        </label>
        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs"
 value={category}
 onChange={(e) => {
    setCategory(e.target.value);
  }}
 />
      </div>
      <div className="mb-3">
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
