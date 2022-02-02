import React, { FC } from 'react';
import s from "./style.module.scss";
import {PostsType} from "../../../../redux/reducers/profile/types";
import {useAppDispatch} from "../../../../Hooks/redux";
import {removePost} from "../../../../redux/reducers/profile/ProfileSlice";
import { Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

const Posts:FC<PostsType> = (el) => {

    const dispatch=useAppDispatch()

    const remove = () => {
        dispatch(removePost(el.id))

    }



    return (

            <div  className={s.myPost}>
                <p>{el.message}</p>
                <Button  type='text'  onClick={remove} icon={<CloseOutlined />}/>
            </div>

    );
};

export default Posts;
