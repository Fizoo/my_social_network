

export type PhotosType={
    small?:string|null
    large?:string|null
}
export interface IUser {
    id:number
    name: string
    city?:string
    photos:PhotosType
    followed?:boolean
    status?:string
}

