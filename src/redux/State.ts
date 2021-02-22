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
}

type DialogPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
}

type AppStateProps = {
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
        message: postMessage,
        likesCount: 3
    }

    state.profilePage.posts.push(newPost)
}

export default state