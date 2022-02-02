import React, {FC} from 'react';
import s from "./style.module.scss";
import {useAppSelector} from "../../Hooks/redux";
import {UserItem} from './UserItem/UserItem';



export const Users: FC = () => {

    const {users}=useAppSelector(state=> state.userReducer)
  return (
      <div className={s.mainPage}>
          {
              users.map(el=><UserItem key={el.id} user={el}/>)
          }

      </div>
  )
}


