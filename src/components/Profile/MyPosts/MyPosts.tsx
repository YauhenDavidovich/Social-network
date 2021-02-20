import React from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";

export type PostType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostType>
}


const MyPosts: React.FC<ProfilePageType> = (props) => {

    let postElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

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