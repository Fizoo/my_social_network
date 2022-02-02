import {combineReducers, configureStore} from "@reduxjs/toolkit";
import postReducer from "./reducers/profile/ProfileSlice";
import dialogReducer from './reducers/dialogs/DialogSlice'
import userReducer from './reducers/users/UsersSlice'
import authReducer from './reducers/auth/AuthSlice'


let rootReducer = combineReducers({
    postReducer,
    dialogReducer,
    userReducer,
    authReducer
})


export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch