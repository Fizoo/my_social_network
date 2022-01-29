import React, {FC} from 'react';
import s from './App.module.css'
import { Header } from './components/header/Header';
import 'antd/dist/antd.css';
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";

export const App:FC = () => (
    <div className={s.main} >
            <Header/>
            <Navbar/>
            <Profile/>

    </div>
);


