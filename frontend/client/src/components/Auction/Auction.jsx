import React,{useState,useEffect} from 'react'
import Loginnavbar from './Loginnavbar'
import ClipLoader from "react-spinners/ClipLoader";
import Carousel from '../Auctiongallery';
import { Button } from 'react-daisyui';
import {useLocation} from 'react-router-dom';
import { useSelector } from 'react-redux';
import Footer from '../Footer';
const Auction = () => {
let auctionId;
const location = useLocation();
console.log(location.pathname);
auctionId = location.pathname.split('/')[2];
const auction = useSelector((state)=>state.auction.auctions.data[0]).find(auction=>auction.id == auctionId);
console.log(auction);
const [loading,setLoading] = useState(false);
  let [color, setColor] = useState("#ffffff");
useEffect(()=>{
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 1000);
},[])
   return (
    <div>
        <Loginnavbar />
        {
            loading ? 
            <div  className="flex align-center justify-center">
                <ClipLoader
                color='teal'
                loading={loading}
                size={150}
                aria-label="Loading Spinner"
                data-testid="loader"
              /> 
            </div>
              : <div className="flex justify-between items-center">
                <div>
                    <Carousel photos={auction.photos}/>
                </div>
                <div className='seller mr-5 p-3'>
<div className='details'>
<h4 className='m-2'>Price {auction?.price} ,Pay after delivery</h4>
<p className='description'>{auction?.description}</p>
 <Button className="bg-gradient-to-r to-[#53ad53] from-[#08ce7c] text-slate-50">Whatsapp Call</Button>
</div>
<div className='profile'>
<p>
    <img  src='image' alt='seller image'/>
</p>
<p className='text-red-300 '>Status: <span className='text-green-500'>Online</span></p>
<p className='m-2'>phone Number:{auction?.phoneNumber}</p>
<Button className="bg-gradient-to-r from-[#ad5389] to-[#3c1053] text-slate-50">Send Message</Button>
<h4 className='m-2'>Owner: {auction?.Owner}</h4>
</div>
                </div>
              </div>
        }
      {/* <Footer/> */}
    </div>
  )
}

export default Auction
