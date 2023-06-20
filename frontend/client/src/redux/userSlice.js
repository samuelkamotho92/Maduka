import {createSlice} from '@reduxjs/toolkit'
const userSlice = createSlice({
    name:'user',
    initialState:{
     currentUser:null,
     usersRegistered:null,
     isFetching:false,
     error:false
    },
    reducers:{
        loginStart:(state)=>{
            state.isFetching = true;
        },
        loginSuccess:(state,action)=>{
            state.isFetching = false;
            state.error = false;
            state.currentUser = action.payload
        },
        loginFailure:(state,action)=>{
            state.isFetching = false;
            state.error = action.payload;
        },
        logout: (state) => {
            state.currentUser = null;
    },
    }
})
export const {loginStart,loginSuccess,loginFailure,logout} = userSlice.actions;
export default userSlice.reducer;