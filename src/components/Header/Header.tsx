import React, {FC} from 'react';
import photo from './../../assets/images/37395461_1728469247273574_2742199746478211072_o.jpg'
import s from "./style.module.scss";
import {Avatar, Badge, Button, Dropdown, Menu} from "antd";
//import {logout} from "../../redux/reducers/auth/AuthSlice";
import {Link, useNavigate} from "react-router-dom";
import {userApi} from "../../API/userApi";


export const Header: FC = () => {

    const navigate = useNavigate()

    const [logout]=userApi.useAuthDeleteMutation()

    const {data}=userApi.useAuthMeQuery()
    const isAuth =data?.resultCode===0

    const handleClick = () => {
        logout()
        navigate('/login')

    }
    const menu = (
        <Menu style={{marginTop: '10px'}}>
            <Menu.Item key="0">
                <Link to='/'>My Profile</Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to='/settings'>Settings</Link>
            </Menu.Item>
            <Menu.Divider/>
            <Menu.Item key="2">
                <Button onClick={handleClick} type="text">Exit</Button>
            </Menu.Item>
        </Menu>
    )

    return (
        <div className={s.header}>
            <div className={s.headerMain}>
                <div className={s.logo}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPHRvtFUvNT9Rrpz2HE4gu05hPPg8m7DweCg&usqp=CAU"
                        alt="logo"/>
                </div>
                <div className={s.login}>
                    {!isAuth ?
                        <div>
                            <Button onClick={() => navigate('/login')} type="text">Login</Button>
                        </div>
                        :
                        <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
                            <Badge status="warning" count={99} overflowCount={10}>
                                <Avatar src={photo} shape="circle"/>
                            </Badge>
                        </Dropdown>
                    }
                </div>
            </div>
        </div>

    )
};


