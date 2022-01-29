import {FC} from "react";
import s from "./Navbar.module.css";

export const Navbar:FC=()=>{
    return(
        <div className={s.navbar}>
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Music</div>
            <div>Settings</div>
        </div>
    )

}