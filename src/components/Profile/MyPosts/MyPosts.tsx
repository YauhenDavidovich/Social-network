import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";


const MyPosts = () => {
    let posts = [
        {id:1, message:"Hi", likesCount: 4},
        {id:2, message:"Hey", likesCount: 14},
        {id:3, message:"Good day!", likesCount: 24},
        {id:4, message:"Yo!", likesCount: 5},
    ]

    let postElements = posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={style.posts__block}>
            <h3>My posts</h3>
            <div><textarea>New post</textarea></div>
            <div>
                <button>Add post</button>
            </div>
            <div className={style.posts}>
                { postElements }
            </div>
        </div>
    );
};

export default MyPosts;