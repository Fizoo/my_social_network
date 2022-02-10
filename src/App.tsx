import React, {FC} from 'react';
import s from './App.module.scss'
import {Header} from './components/Header/Header';
import 'antd/dist/antd.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Route, Routes} from 'react-router-dom';
import News from './components/Profile/News/News';
import {Music} from "./components/Music/Music";
import {Setting} from "./components/Settings/Setting";
import {Message} from "./components/Messages/Message";
import {Users} from "./components/Users/Users";
import {Login} from "./pages/Login/Login";
import {NotPage} from "./pages/NotPage";
import {userApi} from "./API/userApi";


export const App: FC = () => {

    const {data}=userApi.useAuthMeQuery()
    const isAuth =data?.resultCode===0

    if (!isAuth){
        return (
            <div className={s.main}>
                <Header/>
                <Login/>
            </div>
        )
    }
    return (
        <div className={s.main}>
            <Header/>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Profile/>}/>
                <Route path='users' element={<Users/>}>
                    <Route path=':id' element={<Users/>}/>
                </Route>
                <Route path='messages' element={<Message/>}>
                    <Route path=':userId' element={<Message/>}/>
                </Route>
                <Route path='news' element={<News/>}/>
                <Route path='music' element={<Music/>}/>
                <Route path='settings' element={<Setting/>}/>
                <Route path='login' element={<Login/>}/>
                <Route path="*" element={<NotPage/>}/>
            </Routes>
        </div>
    )
};


