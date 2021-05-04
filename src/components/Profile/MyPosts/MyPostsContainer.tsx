import React from 'react';
import {addPostAC, updateNewPostTextAC} from "../../../redux/State";
import {MyPosts} from './MyPosts';
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {PostsInitialStateType} from "../../../redux/profile-reducer";


type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void,
    addPost: (newPostsText: string) => void
}


let mapStateTopProps = (state: AppRootStateType): PostsInitialStateType => {
    return {
        posts: state.profilePage.posts,
        newPostsText: state.profilePage.newPostsText
    }
}

let mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
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
