import React,{useState,createContext} from 'react'
import Formone from './Formone';
 export const FormCtx = createContext();
 export const Score = createContext();
 const FormProvider = ({children}) => {
   const [title,setTitle] = useState('');
   const [category,setCategory] = useState('');
   const [photos,setPhotos] = useState('');
   const [brand,setBrand] = useState('');
   const [price,setPrice] = useState('');
   const [description,setDescription] = useState('');
   const [paymentMth,setpaymentMth] = useState('');
   const [phoneNumber,setPhoneNumber] = useState();
   const [location,setLoaction] = useState('');
  return (
    <div>
    <FormCtx.Provider value={{title,setTitle,category,setCategory,photos,setPhotos}}>
{children}
    </FormCtx.Provider>
    </div>
  )
}


export default FormProvider