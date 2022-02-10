import React, {FC} from 'react';
import s from './style.module.scss'

interface IProps {
}

export const ProfileFull: FC<IProps> = () => {

    return (
        <div className={s.main}>
            <div className={s.photo}>
              Photo
            </div>
            <div className={s.info}>
              <h1>name</h1>
            </div>
        </div>
    );
};


