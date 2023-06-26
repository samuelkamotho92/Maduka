import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import {FcGoogle} from 'react-icons/fc'
import {MdAlternateEmail} from 'react-icons/md'
import {BsLockFill} from 'react-icons/bs'
import {useForm} from 'react-hook-form';
import * as yup from 'yup' ;
import { yupResolver } from '@hookform/resolvers/yup';
import {login} from '../redux/apiCall'
import { useNavigate } from 'react-router-dom'
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
const loginSchema = yup.object().shape({
email:yup.string().email().required(),
password:yup.string().min(8).required()
  })
  const {handleSubmit,register,watch,formState:{errors}} = useForm({resolver:yupResolver(loginSchema)})
  const onSubmit = (data)=>{
console.log(data);
const {email,password} = data
login(dispatch,{email,password});
navigate('/')
  }
  return (
    <div className=''>   
    <div className="p-8 lg:w-1/2 mx-auto">
   <div className="bg-white rounded-t-lg p-8">
      <p className="text-right ">
          <a href='/'> Home page</a>
         </p>
        <p className="text-center text-sm text-gray-400 font-light">
          Sign in with
        </p>   
        <div>
          
          <div className="flex items-center justify-center space-x-4 mt-3">
            <button className="flex items-center py-2 px-4 text-sm uppercase rounded bg-white hover:bg-gray-100 text-indigo-500 border border-transparent hover:border-transparent hover:text-gray-700 shadow-md hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">       
             <FcGoogle className='mr-4' />
              Google
            </button>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 rounded-b-lg py-12 px-4 lg:px-24">     
        <p className="text-center text-sm text-gray-500 font-light">
          Or sign in with credentials
        </p>
        <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="relative">
            <input
              className="appearance-none border pl-12 border-gray-100 
              shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  
              rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none
               focus:ring-gray-600 focus:shadow-outline  dark:bg-white dark:text-black"
              id="email"
              type="text"
              placeholder="email"
              {...register('email')}
              required
            />
            <div className="absolute left-0 inset-y-0 flex items-center">  
          <MdAlternateEmail />
            </div>
          </div>
          <p style={{color:'red'}}>{errors.email?.message}</p>
          <div className="relative mt-3">     
            <input
              className="appearance-none border pl-12 border-gray-100 shadow-sm focus:shadow-md focus:placeholder-gray-600  transition  rounded-md w-full py-3 text-gray-600 leading-tight focus:outline-none
               focus:ring-gray-600 focus:shadow-outline dark:bg-white dark:text-black"
              id="password"
              type="password"
              placeholder="Password"
              {...register('password')}
              required
            />
            <div className="absolute left-0 inset-y-0 flex items-center">
       <BsLockFill />
            </div>
          </div>
          <p style={{color:'red'}}>{errors.password?.message}</p>
          <div className="mt-4 flex items-center text-gray-500">  
            <input
              type="checkbox"
              id="remember"
              name="remember"
              className="mr-3"
            />
            <label htmlFor="remember">Remember me</label>
          </div>
          <div className='flex justify-between'>
          <div className="items-left text-red-400">
            <a href="/resetpassword">Forgot password</a>
          </div>
          <div className="items-right">
            <p>Already have acccount</p>
          <a href="/register" className=" text-teal-400 text-lg">Register</a>
          </div>
          </div>
        
          <div className="flex items-center justify-center mt-8">
            <button className="text-white py-2 px-4 uppercase rounded bg-indigo-500 hover:bg-indigo-600 shadow hover:shadow-lg font-medium transition transform hover:-translate-y-0.5"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
  )
}

export default Login