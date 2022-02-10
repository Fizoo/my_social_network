export type PostsType={
    id:number,
    message:string
    likesCount?:number
}

export interface IContactProfile {
    github: string
    vk: string
    facebook: string
    instagram: string
    twitter: string
    website: string
    youtube: string
    mainLink: string
}
export interface IProfile {
    userId:number
    lookingForAJob: boolean
    lookingForAJobDescription:string
    fullName:string
    contacts: IContactProfile

}