import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IUser} from "./types";

interface IState {
    users: IUser[],
    error:string,
    loading:boolean
}

const initialState: IState = {
    users: [
        {
            id: 1, name: 'Oleg', city: 'Kiev', followed: false, photos: {small: 'https://joeschmoe.io/api/v1/random', large: ''}
        },
        {
            id: 2, name: 'Katrina', city: 'Kiev', followed: false, photos: {small: 'https://joeschmoe.io/api/v1/female/random', large: ''}
        },
        {
            id: 3, name: 'Sofi', city: 'Kiev', followed: true, photos: {small: 'https://joeschmoe.io/api/v1/joe', large: ''}
        },
        {
            id: 4, name: 'Victoria', city: 'Kiev', followed: false, photos: {small: 'https://joeschmoe.io/api/v1/male/random', large: ''}
        }
    ],
    error:'',
    loading:false

}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        followed:(state,action:PayloadAction<number>)=>{
         state.users.map(user=>user.id===action.payload? user.followed=!user.followed:user)
        },
        /*setUsers:(state,action:PayloadAction<IUser[]>)=>{
            state.users= state.users.concat(action.payload)
        }*/
    },
  /*  extraReducers: builder => builder
        .addMatcher(
            userApi.endpoints.fetchAllUsers.matchFulfilled,
            (state, action: PayloadAction<IUser[]>) => {
                state.users = state.users.concat(action.payload)
            }
        ),*/

})

export default userSlice.reducer
export const  {followed}=userSlice.actions