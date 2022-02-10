import { Button } from 'antd';
import React, { FC} from 'react';
import {IUser} from "../../redux/reducers/users/types";

interface IProps {
    item:IUser,
    update:(id:number)=>void
    deleteF:(id:number)=>void
}

export const UserItem: FC<IProps> = ({item,update,deleteF}) => {

    function handleUpdate() {
        update(item.id)
    }

    function handleDelete() {
        deleteF(item.id)
    }

    return (
      <div  key={item.id} style={{border:'1px solid black',margin:10,padding:10,backgroundColor:'white'}}>
          <h1 onClick={handleDelete}>{item.name}</h1>
          <p>{item.id}</p>
          <Button onClick={handleUpdate}>{item.followed?'Follow':'Unfollow'}</Button>
      </div>
  );
};


