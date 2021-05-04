import {ActionsType, ProfilePageType} from "./State";
import {DialogType} from "./dialog-reducer";

type PostType = {
    id: number
    message: string
    likesCount: number
}


let initialState = {
    posts:
        [{id: 1, message: "Hi", likesCount: 4},
            {id: 2, message: "Hey", likesCount: 14},
            {id: 3, message: "Good day!", likesCount: 24},
            {id: 4, message: "Yo!", likesCount: 5},] as Array<PostType>,
    newPostsText: "",
}

export type PostsInitialStateType = typeof initialState

const profileReducer = (state: PostsInitialStateType = initialState, action: ActionsType): PostsInitialStateType => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostType = {
                id: 5,
                message: state.newPostsText,
                likesCount: 3
            }
            state.posts.push(newPost)
            state.newPostsText = ""
            return state
        case 'UPDATE-NEW-POST-TEXT':
            state.newPostsText = action.newText
            return state
        default:
            return state
    }
}

export default profileReducer
