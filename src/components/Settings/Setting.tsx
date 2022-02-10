import React, {FC, useState} from "react";
import {userApi} from "../../API/userApi";
import {Pagination} from "antd";
import {IUser} from "../../redux/reducers/users/types";
import {UserItem} from "./UserItem";


export const Setting: FC = () => {


    const [limit, setLimit] = useState(7);
    const [pages, setPages] = useState(1);

    const {data} = userApi.useFetchAllUsersQuery({count: limit, page: pages})

    const [getFollow] = userApi.useAddFollowMutation()
    const [deleteFollow] = userApi.useDeleteFollowMutation()


    const total = data?.totalCount

    function handleClick(page: number) {
        setPages(page)
    }

    const onShowSizeChange = (current: number, pageSize: number) => {
        setLimit(pageSize)
        setPages(pageSize)
    }

    const setFollow = (id: number) => {
        getFollow(id)
    }

    const delFollow = (id: number) => {
        deleteFollow(id)
    }

    return (
        <div>
            <Pagination
                showQuickJumper
                onChange={handleClick}
                onShowSizeChange={onShowSizeChange}
                pageSize={limit}
                total={total}/>

            {data?.items.map((item: IUser) => <UserItem key={item.id}
                                                        deleteF={delFollow}
                                                        update={setFollow}
                                                        item={item}/>
            )}
        </div>
    );
};


