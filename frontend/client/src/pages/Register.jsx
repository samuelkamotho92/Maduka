import React from 'react'
import { Link } from 'react-router-dom'
import {FaUnlock,FaUserCircle} from 'react-icons/fa'
import {FcLock} from 'react-icons/fc'
import {RiAccountBoxLine} from 'react-icons/ri'
const Register = () => {
  return (
    <div className="h-screen md:flex">
	<div
		className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-r from-[#ad5389] to-[#3c1053] i justify-around items-center hidden">
		<div>
			<h1 className="text-white font-bold text-4xl font-sans">Maduka</h1>
			<p className="text-white mt-1">Register and be among the thousands of auctioniers in kenya or set up your business online</p>
			<button type="submit" className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2">
                <Link to='/'>Home</Link>
                </button>
		</div>
		<div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
		<div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
	</div>
	<div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
		<form className="bg-white">
			<h1 className="text-gray-800 font-bold text-2xl mb-1">Sign Up!</h1>
			<p className="text-sm font-normal text-gray-600 mb-7">Enter your Personal Details</p>
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<RiAccountBoxLine />
				<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Full name" />
      </div>
				<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
				<FaUserCircle />
					<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Username" />
      </div>
					<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
						<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
							viewBox="0 0 24 24" stroke="currentColor">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
								d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
						</svg>
						<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Email Address" />
      </div>
						<div className="flex items-center border-2 py-2 px-3 rounded-2xl">
						<FcLock />
							<input className="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Password" />
      </div>
      <div className='flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mt-2'>
      < FaUnlock />
      <input className='pl-2 outline-none border-none' type='text' name='' id='' placeholder='Password Confirm' />
      </div>
							<button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Sign Up</button>
							<span className="text-sm ml-2 hover:text-[#ad5389] cursor-pointer">Already Have Account</span>
                            <span className='ml-4 hover:text-[#ad5389] cursor-pointer'>
                                <Link to='/login'>Login</Link>
                            </span>
		</form>
	</div>
</div>
  )
}

export default Register
