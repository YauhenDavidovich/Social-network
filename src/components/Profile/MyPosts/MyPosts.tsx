import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div>My posts
            <textarea>New post</textarea>
            <button>Add post</button>
            <div>
                <Post message='Hi!'/>
                <Post message='How are yoy?'/>
            </div>
        </div>
    );
};

export default MyPosts;