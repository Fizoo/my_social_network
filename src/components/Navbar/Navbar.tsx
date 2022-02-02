import {FC} from "react";
import { NavLink } from "react-router-dom";
import s from "./style.module.scss";
import {isAct} from "../utils/ActiveLink";
import {useAppSelector} from "../../Hooks/redux";

export const Navbar:FC=()=>{

    const {isAuth} = useAppSelector(state => state.authReducer)


    return(
        <div className={isAuth? s.navbar:s.noAuth }>
            <NavLink to='/'>Profile</NavLink>
            <NavLink to='/users'>Users</NavLink>
            <NavLink to='/messages/'
                     className={isAct}>Messages
            </NavLink>
            <NavLink to='/news'  className={isAct} >News</NavLink>
            <NavLink to='/music'  className={isAct}>Music</NavLink>
            <NavLink to='/settings'  className={isAct} >Settings</NavLink>

        </div>
    )

}