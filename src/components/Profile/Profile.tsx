import React from 'react';
import styles from './Profile.module.css'
import MyPosts, {PostType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType} from "../../redux/State";

export type ProfilePropsType = {
    posts: Array<PostType>
    dispatch: (action: ActionsType) => void
    newPostsText: string
}

const Profile: React.FC<ProfilePropsType> = (props ) => {
    debugger
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} newPostsText={props.newPostsText} dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;
