import React from 'react';
import styles from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div>
            <div><img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkHIXlWZwX8_MOjlmFPqY5kRRCayLbVVnqA&usqp=CAU'/>
            </div>
            <div>Ava+Description</div>
            <MyPosts/>

        </div>
    );
};

export default Profile;