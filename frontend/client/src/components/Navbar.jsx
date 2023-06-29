import {Link} from 'react-router-dom'
import {useState,useEffect} from 'react'
import {useDispatch, useSelector } from 'react-redux';
import { Button } from 'react-daisyui';
import {loggedOut}  from '../redux/apiCall'
const Navbar = () => {
   const [btn,setbtn] = useState();
   const [menu,setmenu] = useState();
   const dispatch = useDispatch();
    const user = useSelector((state)=>state.user?.currentUser?.data.username)
   console.log(user)
   useEffect(()=>{
const getBtn = document.getElementById('hamburger-button');
const getMenu = document.getElementById('mobile-menu');
setbtn(getBtn);
setmenu(getMenu);
   },[])
   const toggleMenu = ()=>{
console.log('working fine');
menu.classList.toggle('hidden');
menu.classList.toggle('flex');
   }
  return (
<div className='h-50 shadow-md relative bg-gradient-to-r from-[#ad5389] to-[#3c1053] text-slate-50'>
<div className="py-2.5 sm:px-5 sm:py-2 flex justify-between items-center" >
<div className='flex-1 justify-start items-center'>
<h2 className='text-lg ml-2'>Maduka SMEs</h2>
</div>
<div className='hidden md:flex items-center justify-center flex-1'>
   <div className='text-sm cursor-pointer m-2 sm:text-sm ml-2'>
<p>Welcome Back <span>{user}</span></p>
   </div>
   <div className='text-sm cursor-pointer m-2 sm:text-sm ml-2'>
<Link to='/auctions'>
Auctions
</Link>
   </div>
   <div className='text-sm cursor-pointer m-2 sm:text-sm ml-2'>
      <Link>
Enterprise
      </Link>
   </div>
</div>
{
   !user? (
<div className='hidden md:flex items-center justify-end flex-1'>
<div className='text-md cursor-pointer m-2 sm:text-sm ml-2  hover:bg-teal-400 p-1'>
<Link to='/login'>
Login
</Link>
</div>
<div className='text-md cursor-pointer m-2 sm:text-sm ml-2 hover:bg-teal-400 p-1'>
<Link to='/register'>
Register
</Link>
   </div>
</div>
   ):(
      <div className='hidden md:flex items-center justify-end flex-1'>
<Button onClick={()=>{loggedOut(dispatch)}}>Logout</Button>
      </div>
   )
}



<button  id="hamburger-button" className="block text-3xl md:hidden cursor-pointer mx-3" onClick={toggleMenu}>
&#9776;
  </button>
<section  id='mobile-menu' className='absolute top-0 bg-gradient-to-r from-[#ad5389] to-[#3c1053] text-slate-50 w-full text-5xl  flex-col justify-center
  origin-right animate-open-menu hidden
  ' onClick={toggleMenu}>
<button className='text-8xl self-end px-6'> 
&times;
</button>
<nav className='flex flex-col'>
<div className='text-sm cursor-pointer m-2 sm:text-sm ml-2'>
<p>Welcome Back <span>Samuel Kamotho</span></p>
   </div>
   <div className='text-sm cursor-pointer m-2 sm:text-sm ml-2'>
   <Link to='/auctions'>
Auctions
</Link>
   </div>
   <div className='text-sm cursor-pointer m-2 sm:text-sm ml-2'>
   <Link>
Enterprise
      </Link>
   </div>
</nav>
</section>
      </div>
    </div>
  )
}

export default Navbar
