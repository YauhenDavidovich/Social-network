import {ActionsType} from "./redux-store";
import {api, ProfileResponseType} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


type PostType = {
    id: number
    message: string
    likesCount: number
}

type InitialSTateType = {
    profile: ProfileResponseType
    newPostsText:string,
    posts: PostType[]
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
}

export type PostsInitialStateType = typeof initialState

const profileReducer = (state: PostsInitialStateType = initialState, action: ActionsType): PostsInitialStateType => {
    switch (action.type) {
        case ADD_POST: {
            const newPost: PostType = {
                id: 5,
                message: state.newPostsText,
                likesCount: 3
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostsText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostsText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
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

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: newText
    } as const
}
export const setUserProfile = (profile: ProfileResponseType) => {
    return {
        type: SET_USER_PROFILE,
        profile: profile
    } as const
}



export const getUserProfile = (userId:string) => (dispatch:Dispatch<ActionsType>)=> {
    api.getProfile(userId).then(data => {
        dispatch(setUserProfile(data))
    })
}



export default profileReducer
