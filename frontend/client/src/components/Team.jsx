import React,{useState} from 'react'
import Charity from '../assets/Charity.png';
import Kelvin from '../assets/kevo.png';
import Denis from '../assets/Denis.png';
import samkam from '../assets/samkam.png';


const  Teams = ()=>{
    const teamMembers = [
    {
    id:1,
    image:`${samkam}`,
    name:"Samuel Kamotho",
    role:"Founder",
    link:`https://www.linkedin.com/in/samuel-kamotho-03b04b1a0/`
    },
    {
        id:2,
        image:`${Kelvin}`,
        name:"Kelvin Gatimu",
        role:"CEO",
        link:`https://www.linkedin.com/in/kevin-comba-gatimu/`
    },
    {
        id:3,
        image:`${Charity}`,
        name:"Charity Jelimo",
        role:"Co-Founder",
        link:`https://www.linkedin.com/in/charity-jelimo-66b128220`
    },
    {
        id:4,
        image:`${Denis}`,
        name:"Denis Wachira",
        role:"Co-Founder",
        link:`https://www.linkedin.com/in/denis-wachira/`
    },
]


  return (
    <div className="container my-24 px-6 mx-auto">
    <section className="mb-32 text-gray-800 text-center">
      <h2 className="text-5xl font-bold mb-10 text-warning "> 
      <span className="text-[#ad5389] mr-1">Meet the</span> team</h2>

      <div className="grid md:grid-cols-4 gap-3">
        {
            teamMembers.map(({image,name,role,id,link})=>(
                <div className="mb-6 lg:mb-0" key={id}>
                <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat  h-3/5">
                    <img src={image} className="w-full rounded-t-lg" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg className="absolute" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"
                      style={{ left: 0, bottom: 0 }}>
                      <path fill="#fff"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                      </path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="text-lg font-bold mb-4">{name}</h5>
                    <p className="text-gray-500 mb-4">{role}</p>
                    <ul className="list-inside flex mx-auto justify-center">
                      <a href={link} target={'_blank'} className="px-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-4 h-4 text-blue-600">
                          <path fill="currentColor"
                            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                        </svg>
                      </a>
                    </ul>
                  </div>
                </div>
              </div>  
            ))
        }
        </div>
    </section>
  </div>
  )
}

export default Teams