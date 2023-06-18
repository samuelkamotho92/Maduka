import React,{useState,useEffect} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Carousel} from 'react-responsive-carousel'
import profile1 from  '../assets/profile1.jpg'
import profile2 from '../assets/profile2.jpeg'
import profile3 from '../assets/profile4.jpg'
import '../../src/App.css'
const Testimonial = () => {

    const testimonialData = [
    {
  id:1,
  image:profile1,
  name:'Mr Chris Mureithi',
  role:'Business Man',
  description:'Ever since i started using Maduka my company has increased in revenue and grown a lot'
    },
    {
        id:2,
        image:profile3,
        name:'Marjun Kumar',
        role:'Student at Starthmore University',
        description:'As a student i have gotten some cash to sustain my upkeep , this has been made possible by Maduka.Where i was ranked the best auctioner last month'
    }
]


  return (
    <div>
    <h2 className="text-5xl font-bold mb-10 text-warning  text-center mt-8"> 
    <span className="text-[#ad5389] mr-1">Client</span> Testimonials</h2>
    <Carousel
    showArrows={true}
    infiniteLoop={true}
    showThumbs={false}
    showStatus={false}
    autoPlay={true}
    interval={6100}
    >
    {testimonialData.map(({name,role,image,description,id})=>(
<div key={id}>
<img src={image} />
<div className="myCarousel">
  <h3>{name}</h3>
  <h4>{role}</h4>
  <p>
    {description}
  </p>
</div>
</div>
))}
</Carousel>
    </div>
  )
}

export default Testimonial
