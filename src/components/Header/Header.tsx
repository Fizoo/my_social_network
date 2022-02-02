import React, {FC} from 'react';
import photo from './../../assets/images/37395461_1728469247273574_2742199746478211072_o.jpg'

import s from "./style.module.scss";
import {Avatar, Badge, Button} from "antd";
import {logout} from "../../redux/reducers/auth/AuthSlice";
import {useAppDispatch} from "../../Hooks/redux";
import {useNavigate} from "react-router-dom";


export const Header: FC = () => {
    const dispatch=useAppDispatch()
    const navigate=useNavigate()

   const handleClick = () => {
        navigate('/login')
       dispatch(logout())
   }

  return (
      <div className={s.header}>
        <div className={s.headerMain}>
            <div className={s.logo}>

                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU" alt="logo"/>
            </div>
            <div className={s.login}>
                <a href="">
                    <Badge status="warning"  count={99} overflowCount={10}>
                        <Avatar src={photo} shape="circle"  />
                    </Badge>
                </a>

               <Button onClick={handleClick} type="text" >Exit</Button>
            {/*  <Login/>*/}
            </div>
        </div>
      </div>

  )
};

