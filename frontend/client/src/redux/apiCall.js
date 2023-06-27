//import the reducers from slice
import {
    loginStart,
    loginFailure,
    loginSuccess,
    logout
} from './userSlice'

import {
getAuctionFailure,
getAuctionStart,
getAuctionSuccess,
createAuctionFailure,
createAuctionSuccess,
createAuctionStart
} from
'./auction'


import axios from 'axios'
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';


export const registerUser = async(dispatch,user)=>{
try{
    console.log(user)
const res = await fetch('http://localhost:8000/users/',{
method: 'POST',
headers:{
    "Content-Type": "application/json",
},
body: JSON.stringify(user)
})
const data = await res.json();
if(data.status == 'success'){
    alert('registered successfully');
}
console.log(data);
}catch(err){
    alert('user not registered')
    console.log(err);
}
}
//login user

export const login = async (dispatch, user) => {
    console.log(user);
    dispatch(loginStart());
    try {
      const response = await fetch("http://localhost:8000/users/login", {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
  
      const result = await response.json();
      console.log(response.ok,result)
      if(result.status === 'failure' || !response.ok){
        console.log()
        dispatch(loginFailure(result));
      }else{
        dispatch(loginSuccess(result));
        alert('logged in successfully being redirected to main page')
        toast.success(`successfully logged in`,{
          position:'top-center'
        })
        
      }
    } catch (err) {
      dispatch(loginFailure());
    }
  };

  export const loggedOut = function(dispatch){
    dispatch(logout());
    alert('logged out successfully');
    toast.info(`logged out successfully`,{
      position:'top-center'
    })
  }

  export const getAuction = async(dispatch)=>{
dispatch(getAuctionStart());
try{
const res =  await fetch(`http://localhost:8000/auctions`);
const data = await res.json();
console.log(data);
dispatch(getAuctionSuccess(data))

}catch(err){
dispatch(getAuctionFailure(err));
}
  }

  export const createAuction = async(auction)=>{
console.log(auction);
try{
const res = await fetch(`http://localhost:8000/auctions`,{
  method:"POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(auction),
})
const data = await res.json();
console.log(data);
if(data.created == 'successfully' ){
  alert('Auction created successfully');
  toast.info(`Auction created successfully`,{
    position:'top-center'
  })
}
}catch(err){
console.log(err.message);
}
  }