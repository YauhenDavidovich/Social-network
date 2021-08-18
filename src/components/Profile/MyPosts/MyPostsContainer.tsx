import React from 'react';

import {MyPosts} from './MyPosts';
import {connect} from "react-redux";
import {AppRootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, PostsInitialStateType, updateNewPostTextAC} from "../../../redux/profile-reducer";


type MapDispatchPropsType = {
    updateNewPostText: (text: string) => void,
    addPost: (newPostsText: string) => void
}


let mapStateTopProps = (state: AppRootStateType): PostsInitialStateType => {
    return {
        posts: state.profilePage.posts,
        newPostsText: state.profilePage.newPostsText,
        profile: state.profilePage.profile,
        status: state.profilePage.status
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
