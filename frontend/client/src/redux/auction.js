import { createSlice } from "@reduxjs/toolkit";
const auctionSlice = createSlice({
   name:'auctions',
   initialState:{
    auctions:[],
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
    },
    createAuctionStart:(state)=>{
state.isFetching = true;
    },
    createAuctionSuccess:(state,action)=>{
  state.auctions.push(action.payload);
    },
    createAuctionFailure:(state)=>{
        state.error = true;
    },
    updateAuctionStart:(state)=>{
        state.isFetching = true;
        state.error = false;
    },
    updateAuctionSuccess: (state, action) => {
        state.isFetching = false;
        console.log(state.auctions);
        //console.log( state.auctions.findIndex((auction) => auction.id === action.payload.id))
        state.auctions[
          state.auctions.findIndex((auction) => auction.id === action.payload.id)
        ] = action.payload.auction;
      },
      updateAuctionFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
      deleteAuctionStart: (state) => {
        state.isFetching = true;
        state.error = false;
      },
      deleteAuctionSuccess: (state, action) => {
        state.isFetching = false;
        state.auctions.splice(
          state.auctions.findIndex((auction) => auction.id === action.payload),
          1
        );
      },
      deleteAuctionFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },

   }
});
export const {getAuctionFailure,getAuctionStart,
    getAuctionSuccess,
    createAuctionFailure,
    createAuctionSuccess,createAuctionStart,
    updateAuctionStart,updateAuctionSuccess,
    updateAuctionFailure,deleteAuctionStart,
    deleteAuctionSuccess,
    deleteAuctionFailure} = auctionSlice.actions;
export default auctionSlice.reducer