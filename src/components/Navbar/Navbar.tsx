import {FC} from "react";
import {NavLink} from "react-router-dom";
import s from "./style.module.scss";
import {isAct} from "../utils/ActiveLink";

export const Navbar:FC=()=>{




    return(
        <div className={ s.navbar }>
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