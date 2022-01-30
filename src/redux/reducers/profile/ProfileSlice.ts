import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import { PostsType } from "./types"



interface IPost {
    post:Array<PostsType>,
    status:string
}

const initialState:IPost = {
    post: [
        {id: 1, message: 'Hi, how are you?', likesCount: 12},
        {id: 2, message: 'It\'s my first post', likesCount: 11},
        {id: 3, message: 'Blabla', likesCount: 11},
        {id: 4, message: 'Dada', likesCount: 11}
    ],
    status:'p'
}

export  const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{
        addPost:(state,action:PayloadAction<string>) =>{
            let newPost:PostsType={
                id:Date.now().valueOf(),
                message:action.payload,
                likesCount:0
            }
            state.post.push(newPost)
        },
        removePost:(state,action:PayloadAction<number>) =>{
           state.post= state.post.filter(el=>el.id !==action.payload)
            /*const index = state.post.findIndex((todo) => todo.id === action.payload);
            state.post.splice(index, 1);*/
        },
        updateStatus:(state,action:PayloadAction<string>)=>{
            state.status=action.payload
        }
    }
})

export const {addPost,removePost,updateStatus } = postSlice.actions
export default postSlice.reducer;
