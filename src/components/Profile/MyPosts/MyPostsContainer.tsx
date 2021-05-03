import React from 'react';
import {addPostAC, sendMessageAC, updateNewMessageBodyAC, updateNewPostTextAC} from "../../../redux/State";
import {MyPosts} from './MyPosts';
import {connect} from "react-redux";


let mapStateTopProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        newPostsText: state.profilePage.newPostsText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        updateNewPostText: (text: string) => {
            let action = updateNewPostTextAC(text);
            dispatch(action)
        },
        addPost: (newPostsText: string) => {
            dispatch(addPostAC(newPostsText))
        }

    }
}


const MyPostsContainer = connect(mapStateTopProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
