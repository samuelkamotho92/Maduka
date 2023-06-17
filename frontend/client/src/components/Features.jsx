import React,{useState} from 'react'
import '../App.css';
import Accordion from './Accordion';
const Features = () => {
  const accordion = [{
    id:1,
    title:"Mission",
    content:"Offer best online ecommerce and auctioning experience"
  },
  {
    id:2,
    title:"Vision",
    content:"Best auctioning plartform and enterprise site"
  },
  {
    id:3,
    title:"Target Market",
    content:"Our target market is connecting buyers and sellers"
  }
]
  const [isActive,setIsActive] = useState(false);
  return (
    <div>
      <div className='text-center pb-12 md:pb-16'>
        <h1 className='text-5xl font-bold mb-10 text-warning '>
            <span className='text-[#ad5389] mr-1'>
            Maduka
            </span> 
            SMEs
        </h1>
        <p className='text-xl text-gray-900 font-bold'>About Us</p>
      </div>
      
      <div className='flex justify-around'>
<div className='bg-gradient-to-r from-[#ad5389] to-[#3c1053] text-slate-50 p-10'>
<p>Registered Auctions</p>
<div>
<span className='text-center'>1000</span>
</div>
</div>
<div className='bg-gradient-to-r from-[#ad5389] to-[#3c1053] text-slate-50 p-10'>
<p>Registerd Enterprise</p>
<div>
<span className='text-center'>500</span>
</div>
</div>
      </div>
        <h2 className='mb-7 text-center text-lg font-bold'>Our Objectives</h2>
        <div className="accordion rounded-[30px]">
  {accordion.map(({title,content,id})=>(
<Accordion title={title} content={content} key={id} />
  ))}
      </div>
    </div>
  )

}

export default Features
