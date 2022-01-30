import React, {FC} from 'react';
import s from "./style.module.scss";
import {Image} from "antd";
import photo1 from "../../../assets/images/DSC08977.png";
import photo2 from "../../../assets/images/IMG_20210114_225428_298.jpg";
import photo3 from "../../../assets/images/яя.jpg";
import photo4 from "../../../assets/images/я22.jpg";
import photo5 from "../../../assets/images/LEJf_ihxHNQ.jpg";

export const AllPhoto:FC = () => {
    return (
        <div className={s.allPhoto}>
            <Image
                width={100}
                height={100}
                src={photo1}
            />
            <Image
                width={100}
                height={100}
                src={photo2}
            />
            <Image
                width={100}
                height={100}
                src={photo3}
            />
            <Image
                width={100}
                height={100}
                src={photo4}
            />
            <Image
                width={100}
                height={100}
                src={photo5}
            />

        </div>
    );
};


