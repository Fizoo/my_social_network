import React, {FC, useState} from 'react';
import s from "./style.module.scss";
import {Button, Form, Input} from "antd";
import {useAppDispatch} from "../../../Hooks/redux";
import {addMessage} from "../../../redux/reducers/dialogs/DialogSlice";
const { TextArea } = Input;


interface IProps {
}

export const MessageForm: FC<IProps> = () => {
    const dispatch=useAppDispatch()

    const [value, setValue] = useState('');

    const handleSubmit = () => {
        dispatch(addMessage(value))
    };

    return (
        <div className={s.messageForm}>
            <Form onFinish={handleSubmit}>
                <TextArea rows={4}
                          onChange={(e)=>setValue(e.target.value)}
                          allowClear
                          value={value}
                />
                <Button htmlType="submit">Add</Button>
            </Form>
        </div>
    )
}


