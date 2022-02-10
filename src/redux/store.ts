import {combineReducers, configureStore} from "@reduxjs/toolkit";
import postReducer from "./reducers/profile/ProfileSlice";
import dialogReducer from './reducers/dialogs/DialogSlice'
import userReducer from './reducers/users/UsersSlice'
import authReducer from './reducers/auth/AuthSlice'
import {userApi} from "../API/userApi";


let rootReducer = combineReducers({
    postReducer,
    dialogReducer,
    userReducer,
    authReducer,
    [userApi.reducerPath]:userApi.reducer
})


export const store = configureStore({
    reducer: rootReducer,
    middleware:(getDefaultMiddleware)=>
        getDefaultMiddleware().concat(userApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch