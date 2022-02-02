import React, { FC} from 'react';
import {useAppSelector} from "../../../Hooks/redux";
import s from "./style.module.scss"

interface IProps {}

export const MessageItem: FC<IProps> = () => {
    const messages=useAppSelector(state=>state.dialogReducer.messages)
  return (
      <div className={s.item}>
          {messages.map(el=><p key={el.id}>{el.message}</p>)}
      </div>
  )
}


