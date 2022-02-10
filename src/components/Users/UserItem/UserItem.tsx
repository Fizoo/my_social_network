import React, {FC} from 'react';
import s from "./style.module.scss";
import {Avatar, Button} from "antd";
import {IUser} from "../../../redux/reducers/users/types";

interface IProps {
   user: IUser,
    follow:(id:number)=>void
    unFollow:(id:number)=>void

}

export const UserItem: FC<IProps> = ({user,follow,unFollow}) => {

    const handleFollow = () => {
        user.followed ? unFollow(user.id):follow(user.id)
    };

    return (
      <div className={s.users}>
          <div>
              <Avatar src={user.photos.small!==null?user.photos.small:'https://joeschmoe.io/api/v1/random'}
                      size={80}
              />
          </div>
          <div className={s.info}>
              <h2>{user.name}</h2>
              <p>{user.city}</p>
              <Button onClick={handleFollow} style={{color:user.followed?'green':'red'}}>{
                  user.followed?'Follow':'Unfollow'
              }</Button>
          </div>
          <div >
              <Button>Write Message</Button>
          </div>
      </div>
  );
};


