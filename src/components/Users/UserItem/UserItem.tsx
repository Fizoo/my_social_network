import React, { FC} from 'react';
import s from "../style.module.scss";
import {Avatar, Button} from "antd";
import {IUser} from "../../../redux/reducers/users/types";
import {useAppDispatch} from "../../../Hooks/redux";
import {followed} from "../../../redux/reducers/users/UsersSlice";

interface IProps {
   user: IUser
}

export const UserItem: FC<IProps> = ({user}) => {

    const dispatch=useAppDispatch()

  return (
      <div className={s.users}>
          <div>
              <Avatar src={user.photos.small}
                      size={80}
              />
          </div>
          <div className={s.info}>
              <h2>{user.name}</h2>
              <p>{user.city}</p>
              <Button onClick={()=>dispatch(followed(user.id))}>{
                  user.followed?'Follow':'Unfollow'
              }</Button>
          </div>
          <div >
              <Button>Write Message</Button>
          </div>
      </div>
  );
};


