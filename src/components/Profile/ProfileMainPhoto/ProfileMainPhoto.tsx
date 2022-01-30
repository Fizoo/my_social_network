import React, {FC} from 'react';
import s from "./style.module.scss";
import myPhoto from "../../../assets/images/37395461_1728469247273574_2742199746478211072_o.jpg";
import {Button} from "antd";

const ProfileMainPhotoL:FC = () => {
    return (
        <div className={s.myPhoto} >
            <img src={myPhoto} alt="mainPhoto"/>
            <Button shape="round" block>Edit</Button>
        </div>
    );
};

export default ProfileMainPhotoL;
