import {combineReducers, configureStore} from "@reduxjs/toolkit";
import postReducer from "./reducers/profile/ProfileSlice";


let rootReducer=combineReducers({
   postReducer
})


export const store=configureStore({
    reducer:rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch