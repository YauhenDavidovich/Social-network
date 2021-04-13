import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/State";
import {MyPosts} from './MyPosts';


// export type PostType = {
//     id: number
//     message: string
//     likesCount: number
// }


const MyPostsContainer = (props:any) => {
    let state = props.store.getState()

    let addPost = (newPostsText: string) => {
        props.store.dispatch(addPostAC(newPostsText))
    }

    let onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostTextAC(text))
    }

    return (
        <MyPosts addPost={addPost} updateNewPostText={onPostChange} posts={state.profilePage.posts}
                 newPostsText={state.profilePage.newPostsText}/>
    );
}

export default MyPostsContainer;
