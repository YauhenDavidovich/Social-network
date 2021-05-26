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

export type StoreType = {
    _state: AppStateProps
    _onChageRender: (state: AppStateProps) => void
    subscribe: (callback: (store: AppStateProps) => void) => void
    getState: () => AppStateProps
    dispatch: (action: ActionsType) => void
}

type AddPostActionType = ReturnType<typeof addPostAC>

type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>

type SendMessageActionType = ReturnType<typeof sendMessageAC>

type SetUsersActionType = ReturnType<typeof setUsersAC>
type FollowUserActionType = ReturnType<typeof followAC>
type UnFollowUserActionType = ReturnType<typeof unfollowAC>

export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | SetUsersActionType
    | FollowUserActionType
    | UnFollowUserActionType


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


const store: StoreType = {
    _state: {
        profilePage: {
            posts:
                [{id: 1, message: "Hi", likesCount: 4},
                    {id: 2, message: "Hey", likesCount: 14},
                    {id: 3, message: "Good day!", likesCount: 24},
                    {id: 4, message: "Yo!", likesCount: 5},],
            newPostsText: "",
        },
        dialogPage: {
            dialogs:
                [{id: 1, name: "Peter"},
                    {id: 2, name: "Olga"},
                    {id: 3, name: "Jack"},
                    {id: 4, name: "Tomas"},],
            messages:
                [{id: 1, message: "Hi!"},
                    {id: 2, message: "Hi!"},
                    {id: 3, message: "Whatsup!"},
                    {id: 4, message: "Hey!"},],
            newMessageBody: "",
        },
        sidebar: {},
    },
    _onChageRender(_state: AppStateProps) {
        console.log("State has just been changed")
    },
    subscribe(callback) {
        this._onChageRender = callback
    },
    getState() {
        return this._state
    },
    dispatch(action: ActionsType) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogsReducer(this._state.dialogPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._onChageRender(this._state)
    }
}

export default store
