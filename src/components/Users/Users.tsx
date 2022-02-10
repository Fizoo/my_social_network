import React, {FC, useState} from 'react';
import s from './style.module.scss'
import {UserItem} from './UserItem/UserItem';
import {userApi} from "../../API/userApi";
import {Pagination} from "antd";


export const Users: FC = () => {

    const [limit, setLimit] = useState(10)
    const [pages, setPages] = useState(1)

    const {data, isLoading} = userApi.useFetchAllUsersQuery({count: limit, page: pages},)

    const [follow] = userApi.useAddFollowMutation()
    const [unfollow] = userApi.useDeleteFollowMutation()

    const total = data?.totalCount

    const handleClick = (page: number) => {
        setPages(page)
    }

    const onShowSizeChange = (current: number, pageSize: number) => {
        setLimit(pageSize)
        setPages(pageSize)
    }


    const followAdd = async (id: number) => {
        await follow(id)
    }
    const followUn = async (id: number) => {
        await unfollow(id)
    }

    return (
        <div className={s.mainPage}>
            {
                isLoading && <div>...isLoading</div>
            }
            <Pagination
                /* showQuickJumper*/
                onChange={handleClick}
                onShowSizeChange={onShowSizeChange}
                pageSize={limit}
                total={total}
                /*  showTotal={total => `Total ${total} items`}*/
            />
            {
                data?.items.map(el => <UserItem key={el.id} unFollow={followUn} follow={followAdd} user={el}/>)
            }
        </div>
    )
}


