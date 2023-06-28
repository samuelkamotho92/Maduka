import React,{useState,useContext} from 'react'
import {FormCtx} from './FormContext';
import './Auction.css'
import {useForm} from 'react-hook-form'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  uploadBytes,
  getDownloadURL,
} from "firebase/storage";
import app from '../../firebase';
import { useEffect } from 'react';
const Formone = () => {
    const [file, setFile] = useState(null);
    const {title,setTitle,category,setCategory,photos,setPhotos} = useContext(FormCtx);
console.log(title,category,photos);

   const handleChange = (url)=>{
 return (
  <div className='flex m-1'>
  <img src={url} alt='img' width='100px' />
  </div>
 )
}
   useEffect(()=>{
handleChange();
   },[handleChange]);
    const handleClick = async(e)=>{
      e.preventDefault();
for (let i = 0; i < file.length; i++) {
  //timestamp unique 
      const fileName = new Date().getTime() + file[i].name;
      const storage = getStorage(app);
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file[i]);
      uploadTask.on('state_changed', 
  (snapshot) => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log('Upload is ' + progress + '% done');
    switch (snapshot.state) {
      case 'paused':
        console.log('Upload is paused');
        break;
      case 'running':
        console.log('Upload is running');
        break;
    }
  }, 
  (error) => {
    console.log(error);
  }, 
  () => {
    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
      photos.push(downloadURL);
      handleChange(downloadURL);
      console.log('File available at', downloadURL);
    });
  }
);
}
console.log(title,category,photos);
}

  return (
    <form className='formone' onSubmit={handleClick}>
         <div className="mb-3">
         <label className="label">
    <span className="label-text">Enter Product Title?</span>
  </label>
        <input type="text"
        id='title'
        value={title}
         placeholder={title}
        className="input input-bordered input-primary w-[300px] text-black" 
        onChange={(e)=>setTitle(e.target.value)}
    required
        />
      </div>
      <div className="mb-3">
      <label className="label">
    <span className="label-text">Choose your product Category?</span>
  </label>
  <select className="select select-primary w-[300px]" id='category' value={category}  onChange={(e)=>setCategory(e.target.value)} required>
  <option disabled selected>{category}</option>
  <option>phone gadgets</option>
  <option>Laptop and Computers</option>
  <option>Furnitures</option>
  <option>Vehicles</option>
</select>
      </div>
      <div className="mb-3 w-[300px] mt-4px">
        <label htmlFor="title" className="form-label">
Photos
        </label>
        <input
          type="file"
          multiple="true"
          id='photos'
        onChange={(e) => setFile(e.target.files)}
        />
      </div>
      <div className='flex'>
      {
 photos?.map(photo => (
  <div className='mx-3' key={photo?.name}>
  <img src={photo} alt='img' width='100px'  height='100px'/>
  </div>
 ))
  }
      </div>
      <button type=' submit'  className='bg-indigo-400 p-3 rounded-md'>Submit Page One</button>
    </form>
  )
}


export default Formone
