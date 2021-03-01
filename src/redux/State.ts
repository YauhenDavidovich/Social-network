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
}

export type AppStateProps = {
    profilePage: ProfilePageType
    dialogPage: DialogPageType
}

export type StoreType = {
    _state: AppStateProps
    updateNewPostText: (newText: string) => void
    addPost: (postMessage: string) => void
    _onChageRender: (state: AppStateProps) => void
    subscribe: (callback: (store: AppStateProps) => void) => void
    getState: ()=> AppStateProps



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
        },
    },
    updateNewPostText(newText: string){
        this._state.profilePage.newPostsText = newText
        this._onChageRender(this._state)
    },
    addPost(postMessage: string){
        const newPost: PostType = {
            id: 5,
            message: state.profilePage.newPostsText,
            likesCount: 3
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostsText = ""
        this._onChageRender(this._state)
    },
    _onChageRender(_state: AppStateProps) {
        console.log("State has just been changed")
    },
    subscribe(callback){
        this._onChageRender = callback
    },
    getState(){
        return this._state
    }


}



let state: AppStateProps = {
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
    },
}

export let addPost = (postMessage: string) => {
    const newPost: PostType = {
        id: 5,
        message: state.profilePage.newPostsText,
        likesCount: 3
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostsText = ""
    onChageRender(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostsText = newText
    onChageRender(state)
}



export default store