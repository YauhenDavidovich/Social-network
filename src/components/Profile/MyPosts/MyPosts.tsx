import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";



export type PostType = {
    id: number
    message: string
    likesCount: number
}


export const MyPosts = (props:any) => {

    let postElements = props.posts.map( (p:PostType) => <Post key = {p.id} message={p.message} likesCount={p.likesCount}/>)

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewPostText(e.currentTarget.value)
    }

    return (
        <div className={style.posts__block}>
            <h3>My posts</h3>
            <div><textarea onChange={onPostChange} value={props.newPostsText}/></div>
            <div>
                <button onClick={onAddPost}>Add post</button>
            </div>
            <div className={style.posts}>
                { postElements }
            </div>
        </div>
    );
};


