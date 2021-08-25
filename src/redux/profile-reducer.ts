import {ActionsType} from "./redux-store";
import {api} from "../api/api";
import {Dispatch} from "redux";
const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';


type PostType = {
    id: number
    message: string
    likesCount: number
}

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



type InitialSTateType = {
    profile: ProfileResponseType
    newPostsText:string,
    posts: PostType[],
    status: string
}

const initialState:InitialSTateType = {
    posts:
        [{id: 1, message: "Hi", likesCount: 4},
            {id: 2, message: "Hey", likesCount: 14},
            {id: 3, message: "Good day!", likesCount: 24},
            {id: 4, message: "Yo!", likesCount: 5},] as Array<PostType>,
    newPostsText: "type yor post here",
    profile: {
        userId: 0,
        fullName: "",
        aboutMe: "",
        contacts: { facebook: "",
            website: "",
            vk: "",
            twitter: "",
            instagram: "",
            youtube: "",
            github: "",
            mainLink: "",},
        lookingForAJob: false,
        lookingForAJobDescription: "",
        photos: { small: "",
            large: "",}
    },
    status: '',
}



export type PostsInitialStateType = typeof initialState

const profileReducer = (state: PostsInitialStateType = initialState, action: ActionsType): PostsInitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: 5,
                message: action.postText,
                likesCount: 3
            }
            return {

                ...state,
                posts: [...state.posts, newPost],
                newPostsText: ''
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }

        default:
            return state
    }
}

export const addPostAC = (postText: string) => {
    return {
        type: ADD_POST,
        postText: postText
    } as const
}

export const setUserProfile = (profile: ProfileResponseType) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    } as const
}

export const setStatus = (status: string) => {
    return {
        type: SET_STATUS,
        status: status
    } as const
}


export const getUserProfile = (userId:string) => (dispatch:Dispatch<ActionsType>)=> {
    api.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}

export const getStatus = (userId:string) => (dispatch:Dispatch<ActionsType>)=> {
    api.getStatus(userId).then(data => {
        debugger
        dispatch(setStatus(data))
    })
}

export const updateStatus = (status: string) => (dispatch:Dispatch<ActionsType>)=> {
    api.updateStatus(status).then(data => {
        if(data.resultCode === 0) {
            dispatch(setStatus(status))
        }
    })
}

export default profileReducer
