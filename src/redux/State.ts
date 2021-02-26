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



export default state