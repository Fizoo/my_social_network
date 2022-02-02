import React, {FC} from 'react';
import s from './style.module.scss'
import {NavLink} from "react-router-dom";
import {MessageForm} from "./MessageForm/MessageForm";
import {useAppSelector} from "../../Hooks/redux";
import {MessageItem} from './MessageItem/MessageItem';


export const Message: FC = () => {

   /*  const isAct = (props:{isActive:boolean}) :string=> props.isActive ? s.active : '';*/
    const {users}=useAppSelector(state=> state.dialogReducer)


    return (
        <div className={s.dialogMain}>
            <div className={s.dialog}>
                <h1>Users</h1>
                <div className={s.userList} >
                    <ul>
                        {users.map(el=><li key={el.id}><NavLink   to={`/messages/${el.id}`}>{el.name}</NavLink></li> )}
                    </ul>
                </div>
            </div>
            <div className={s.messages}>
                    <h1>Dialogs</h1>
                <MessageItem/>

            </div>
            <MessageForm/>

        </div>
    );
};


