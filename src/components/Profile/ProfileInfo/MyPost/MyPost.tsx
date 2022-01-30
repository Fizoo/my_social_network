import React, {FC} from "react";
import s from "./style.module.scss"
import {useAppSelector} from "../../../../Hooks/redux";

import Posts from "./Posts";


export const MyPost: FC = () => {
    let posts=useAppSelector(state=>state.postReducer.post)

    console.log('MyPost')



    return (
        <div className={s.post}>
           {posts.map(el=> <Posts key={el.id} {...el}/>)}
        </div>
    )
}