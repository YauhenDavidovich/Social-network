import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import {followAC, setUsersAC, unfollowAC} from "./users-reducer";

let onChageRender: (state: AppStateProps) => void = () => {
    console.log("State has just been changed")
}

export const subscribe = (callback: (state: AppStateProps) => void) => {
    onChageRender = callback
}

type MessageType = {
    id: number
    message: string
}

type DialogType = {
    id: number
    name: string
}

type PostType = {
    id: number
    message: string
    likesCount: number
}


export type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type ProfilePageType = {
    posts: Array<PostType>
    newPostsText: string
}


export type SidebarType = {}


export type AppStateProps = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
    sidebar: SidebarType
}

type AddPostActionType = ReturnType<typeof addPostAC>

type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>

type SendMessageActionType = ReturnType<typeof sendMessageAC>

type SetUsersActionType = ReturnType<typeof setUsersAC>
type FollowUserActionType = ReturnType<typeof followAC>
type UnFollowUserActionType = ReturnType<typeof unfollowAC>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPageAC>
type SetUsersTotalCountActionType = ReturnType<typeof setUsersTotalCountAC>
type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetchingAC>


export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | SetUsersActionType
    | FollowUserActionType
    | UnFollowUserActionType
    | SetCurrentPageActionType
    | SetUsersTotalCountActionType
    | ToggleIsFetchingActionType

export const toggleIsFetchingAC = (isFetching: boolean) => ({
    type: "TOGGLE_IS_FETCHING",
    isFetching: isFetching
}) as const

export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE',
        currentPage: currentPage
    } as const
}
export const setUsersTotalCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET_USERS_TOTAL_COUNT',
        count: totalUsersCount
    } as const
}

export const addPostAC = (postText: string) => {
    return {
        type: 'ADD-POST',
        postText: postText
    } as const
}

export const updateNewPostTextAC = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

export const updateNewMessageBodyAC = (body: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: body
    } as const
}

export const sendMessageAC = () => {
    return {
        type: "SEND-MESSAGE",
    } as const
}


