import {FC} from "react";
import s from "./Profile.module.scss";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import ProfileMainPhoto from "./ProfileMainPhoto/ProfileMainPhoto";
import FriendsMini from "./FriendsMini/Friends";
import News from "./News/News";
import {AllPhoto} from "./Photo/AllPhoto";
import {ProfilePost} from "./ProfileForm/ProfilePost";


export const Profile:FC = ()=>{

    return(
        <div className={s.content}>
            <div className={s.left}>
                <ProfileMainPhoto/>
                <FriendsMini/>
                <News/>
            </div>
            <div className={s.right}>
                <ProfileInfo/>
                <AllPhoto/>
                <ProfilePost/>
            </div>
        </div>
    )
}