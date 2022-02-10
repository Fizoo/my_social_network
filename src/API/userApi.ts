import axios from "axios";
import {IUser} from "../redux/reducers/users/types";
import {createAsyncThunk} from "@reduxjs/toolkit";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IProfile} from "../redux/reducers/profile/types";

const url = 'https://social-network.samuraijs.com/api/1.0'

//Get users with RTK Query
export const userApi = createApi({
    reducerPath: 'userApi',
    tagTypes: ['User', 'Follow', 'Profile', 'Auth'],
    baseQuery: fetchBaseQuery({baseUrl: url}),
    endpoints: (build) => ({
        fetchAllUsers: build.query<IState, IParams>({
            query: (arg) => {
                // const { count, page } = arg;
                return {
                    url: '/users',
                    method: 'GET',
                    params: {
                        count: arg.count,
                        page: arg.page
                    },
                    credentials: 'include',
                }
            },
            providesTags: (result) =>
                result ? [...result.items.map(({id}) => ({type: 'User', id} as const)),
                        {type: 'User', id: 'LIST'},]
                    : [{type: 'User', id: 'LIST'}],
        }),

        fetchUser: build.query<IState, void>({
            query: () => '/users',
            providesTags: (result) =>
                result ? [...result.items.map(({id}) => ({type: 'User', id} as const)),
                        {type: 'User', id: 'LIST'},]
                    : [{type: 'User', id: 'LIST'}],
        }),

        fetchProfile: build.query<IProfile, number>({
            query: (userId) => `/profile${userId}`,
            providesTags: (result) => [{type: 'Profile', id: 'LIST'}]

        }),

        getFollow: build.query<IResponse<{}>, number>({
            query: (id) => ({
                url: `/follow/${id}`,
                method: 'GET',
                credentials: 'include',
                headers: {
                    "API-KEY": "f15aa505-06e2-4a52-b8b6-00d060536c9e"
                }
            })
            , providesTags: ['Follow']
        }),

        addFollow: build.mutation<IResponse<{}>, number>({
            query: (id) => ({
                url: `/follow/${id}`,
                method: 'POST',
                credentials: 'include',
                headers: {
                    "API-KEY": "f15aa505-06e2-4a52-b8b6-00d060536c9e"
                }
            }),
            invalidatesTags: (result, error, id) => [{type: 'User', id}]
        }),

        deleteFollow: build.mutation<IResponse<{}>, number>({
            query: (id) => ({
                url: `/follow/${id}`,
                method: 'DELETE',
                credentials: 'include',
                headers: {
                    "API-KEY": "f15aa505-06e2-4a52-b8b6-00d060536c9e"
                }
            }),
            invalidatesTags: (result, error, id) => [{type: 'User', id}]
        }),

        authMe: build.query<IResponse<AuthData>, void>({
            query: () => ({
                url: '/auth/me',
                credentials: 'include'
            }),
            providesTags: (result) => [{type: 'Auth', id: 'LIST'}]
        }),

        authLogin:build.mutation<IResponse<{}>, ILogin>({
            query:(arg)=>({
                url:'/auth/login',
                method: 'POST',
                credentials: 'include',
                body:arg
            }),
            invalidatesTags: [{type: 'Auth', id: 'LIST'}]
        }),

        authDelete:build.mutation<IResponse<{}>,void>({
            query:()=>({
                url:'/auth/login',
                method: 'DELETE',
                credentials: 'include'
            }),
            invalidatesTags: [{type: 'Auth', id: 'LIST'}]
        })



    })
})

export const {
    useFetchAllUsersQuery,
    useGetFollowQuery,
    useAddFollowMutation,
    useDeleteFollowMutation,
    useAuthMeQuery,
    useAuthDeleteMutation
} = userApi


//Get users with createAsyncThunk toolkit
export const userAdd = createAsyncThunk(
    'user/setUsers',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<IUserGetType>(url + '/users')
            return response.data.items
        } catch (e) {
            thunkAPI.rejectWithValue('Error download users')
        }
    }
)

interface IUserGetType {
    items: IUser[]
}

interface IState {
    items: IUser[],
    totalCount: number
    error?: string
}

interface IResponse<T> {
    resultCode: number
    messages: string[]
    data: T
}

export interface ILogin {
    email:string,
    password:string,
    rememberMe?:boolean,
    captcha?:boolean
}

interface IParams {
    count: number,
    page: number
}
interface AuthData {
    id:number,
    email:string,
    login:string
}

