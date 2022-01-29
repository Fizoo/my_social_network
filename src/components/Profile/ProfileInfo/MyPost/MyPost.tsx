import {FC, useState} from "react";
import s from "./MyPost.module.css"

interface MyPostTypes {
    posts: string[]
}

export const MyPost: FC<MyPostTypes> = ({posts}) => {
    const pos = ['Hello, world!', 'Hello, world!'
        , 'Hello, world!',
        'Hello, world!',
        'Hello, world!'];

    return (
        <div className={s.post}>
            {[...pos,...posts].map(el=> <div className={s.myPost}>{el}</div>)}
        </div>
    )
}