import React, {FC, useState} from 'react';
import s from "./style.module.scss";
import {Button, Form, Row} from "antd";
import TextArea from "antd/lib/input/TextArea";
import {MyPost} from "../ProfileInfo/MyPost/MyPost";
import {useAppDispatch} from "../../../Hooks/redux";
import {addPost} from "../../../redux/reducers/profile/ProfileSlice";


export const ProfilePost:FC = () => {
    const [value, setValue] = useState('');

    console.log('ProfilePost')

    const dispatch=useAppDispatch()


    const addPosts = () => {
        if(value.length>0) {
            dispatch(addPost(value))
        }
    };

    return (
        <div>
            <div className={s.form}>

                <Form onFinish={addPosts}>
                    <TextArea onChange={(e)=>setValue(e.target.value)} placeholder="Add post" allowClear autoSize />
                    <Row className={s.btnRow} justify='end'>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Row>
                </Form>
            </div>
            <MyPost />
        </div>
    );
};


