import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '7182e7e1-cf7b-49da-8e89-52ae747000d8'
    }
})

export type ContactsType = {
    facebook?: string
    website?: string
    vk?: string
    twitter?: string
    instagram?: string
    youtube?: string
    github?: string
    mainLink?: string
}

export type PhotosType = {
    small: string
    large: string
}

export type ProfileResponseType ={
    userId: number
    fullName: string
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    photos: PhotosType

}

export const api = {
    getUsers(pageNumber = 1, pageSize = 10) {
        return instance.get(`/users?page=${pageNumber}&count=${pageSize}`).then(response => {
            return response.data
        })
    },
    checkAuth(){
        return instance.get(`/auth/me`).then(response => {
            return response.data
        })
    },
    getProfile(userId:string){
        return instance.get<ProfileResponseType>(`profile/${userId}`).then(response => {
            return response.data
        })
    },
    follow(id:number){
        return instance.post(`follow/${id}`, {}).then(response => {
            return response.data
        })
    },
    unfollow(id:number){
        return instance.delete(`follow/${id}`).then(response => {
            return response.data
        })
    }
}

