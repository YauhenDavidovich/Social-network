import {PostType} from "../components/Profile/MyPosts/MyPosts";
import {ActionsType, ProfilePageType} from "./State";

let initialState = {
    posts:
        [{id: 1, message: "Hi", likesCount: 4},
            {id: 2, message: "Hey", likesCount: 14},
            {id: 3, message: "Good day!", likesCount: 24},
            {id: 4, message: "Yo!", likesCount: 5},],
    newPostsText: "",
}

const profileReducer = (state: ProfilePageType = initialState, action: ActionsType) => {
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
