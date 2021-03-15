import {PostType} from "../components/Profile/MyPosts/MyPosts";
import {ActionsType, ProfilePageType} from "./State";

const profileReducer = (state: ProfilePageType, action: ActionsType) => {
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
