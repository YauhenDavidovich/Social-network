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

type ProfilePageType = {
    posts: Array<PostType>
    newPostsText: string

}

type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}

export type AppStateProps = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
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

export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType


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
        if (action.type === 'ADD-POST') {
            const newPost: PostType = {
                id: 5,
                message: this._state.profilePage.newPostsText,
                likesCount: 3
            }
            this._state.profilePage.posts.push(newPost)
            this._state.profilePage.newPostsText = ""
            this._onChageRender(this._state)
        } else if (action.type === "UPDATE-NEW-POST-TEXT") {
            this._state.profilePage.newPostsText = action.newText
            this._onChageRender(this._state)

        } else if (action.type === "UPDATE-NEW-MESSAGE-BODY") {
            this._state.dialogPage.newMessageBody = action.body
            this._onChageRender(this._state)
        } else if (action.type === "SEND-MESSAGE") {
            let body = this._state.dialogPage.newMessageBody
            this._state.dialogPage.newMessageBody = ''
            this._state.dialogPage.messages.push({id: 6, message: body})
            this._onChageRender(this._state)
        }
    }
}

export default store
