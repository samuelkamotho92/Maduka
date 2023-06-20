import React from "react";
import { Link } from "react-router-dom";
import { FaUnlock, FaUserCircle } from "react-icons/fa";
import { FcLock } from "react-icons/fc";
import { RiAccountBoxLine } from "react-icons/ri";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import {BsFillPhoneFill} from 'react-icons/bs'
import { registerUser } from "../redux/apiCall";
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify'
const Register = () => {
const navigate = useNavigate();
	const dispatch = useDispatch();
  //schema
  const registerSchema = yup.object().shape({
    fullname: yup.string().min(3).required(),
    username: yup.string().min(3).max(10).required(),
    phonenumber:yup.string().min(10).required(),
	email: yup.string().email().required(),
    password: yup.string().min(8).required(),
    passwordConfirm: yup.string().oneOf([yup.ref("password"), null]),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({ resolver: yupResolver(registerSchema) });
  const onSubmit = (data) => {
    console.log(data);
	const {fullname,username,phonenumber,email,password} = data;
	registerUser(dispatch,{fullname,username,phonenumber,email,password});
	toast.info(`success you have registered successfully`,{
        position:'top-center'
    })
   navigate('/login');
};
  return (
    <div className="h-screen md:flex">
      <div className="relative overflow-hidden md:flex w-1/2 bg-gradient-to-r from-[#ad5389] to-[#3c1053] i justify-around items-center hidden">
        <div>
          <h1 className="text-white font-bold text-4xl font-sans">Maduka</h1>
          <p className="text-white mt-1">
            Register and be among the thousands of auctioniers in kenya or set
            up your business online
          </p>
          <button
            type="submit"
            className="block w-28 bg-white text-indigo-800 mt-4 py-2 rounded-2xl font-bold mb-2"
          >
            <Link to="/">Home</Link>
          </button>
        </div>
        <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
      </div>
      <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
        <form className="bg-white" onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-gray-800 font-bold text-2xl mb-1">Sign Up!</h1>
          <p className="text-sm font-normal text-gray-600 mb-7">
            Enter your Personal Details
          </p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <RiAccountBoxLine />
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Full name"
              {...register("fullname")}
            />
          </div>
            <p style={{ color: "red" }}>{errors.fullname?.message}</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <FaUserCircle />
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              {...register("username")}
            />
          </div>
            <p style={{ color: "red" }}>{errors.username?.message}</p>
			<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <BsFillPhoneFill />
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="phonenumber"
              id="phonenumber"
              placeholder="phonenumber"
              {...register("phonenumber")}
            />
          </div>
            <p style={{ color: "red" }}>{errors.phonenumber?.message}</p>


		<div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
              />
            </svg>
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="email"
              id="email"
              placeholder="Email Address"
              {...register("email")}
            />
          </div>
            <p style={{ color: "red" }}>{errors.email?.message}</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
            <FcLock />
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="password"
              id="password"
              placeholder="Password"
              {...register("password")}
            />
          </div>
            <p style={{ color: "red" }}>{errors.password?.message}</p>
          <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4 mt-2">
            <FaUnlock />
            <input
              className="pl-2 outline-none border-none"
              type="text"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="Password Confirm"
              {...register("passwordConfirm")}
            />
          </div>
            <p style={{ color: "red" }}>{errors.passwordConfirm?.message}</p>
          <button
            type="submit"
            className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
          >
            Sign Up
          </button>
          <span className="text-sm ml-2 hover:text-[#ad5389] cursor-pointer">
            Already Have Account
          </span>
          <span className="ml-4 hover:text-[#ad5389] cursor-pointer">
            <Link to="/login">Login</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Register;
