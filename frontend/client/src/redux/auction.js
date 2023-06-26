import { createSlice } from "@reduxjs/toolkit";
const auctionSlice = createSlice({
   name:'auctions',
   initialState:{
    auctions:null,
    isFetching:false,
    error:false
   },
   reducers:{
    getAuctionStart:(state)=>{
state.isFetching = true;
    },
    getAuctionSuccess:(state,action)=>{
state.isFetching = false;
state.auctions = action.payload;
state.error = false;
    },
    getAuctionFailure:(state)=>{
        state.error = true;
    }
   }
});
export const {getAuctionFailure,getAuctionStart,getAuctionSuccess} = auctionSlice.actions;
export default auctionSlice.reducer