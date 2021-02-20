import React from 'react';
import styles from './Profile.module.css'
import MyPosts, {ProfilePageType} from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";



const Profile: React.FC<ProfilePageType> = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;