import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    return (
        <div className={style.posts__block}>
            <h3>My posts</h3>
            <div><textarea>New post</textarea></div>
            <div>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                <Post message='Hi!'/>
                <Post message='How are yoy?'/>
            </div>
        </div>
    );
};

export default MyPosts;