import { createSlice } from "@reduxjs/toolkit"

interface IAuth {
    isAuth: boolean;
}

const initialState:IAuth={
    isAuth:true
}

const authSlice=createSlice({
    name:'auth',
    initialState,
    reducers:{
        login:(state)=>{
            state.isAuth=true
        },
        logout:(state)=>{
            state.isAuth=false
        }
    }
})



export default authSlice.reducer
export const {login,logout}=authSlice.actions