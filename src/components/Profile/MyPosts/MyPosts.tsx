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
    addPost: (postText: string) => void
}


const MyPosts: React.FC<ProfilePageType> = (props) => {

    let postElements = props.posts.map( p => <Post message={p.message} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        if(newPostElement.current) {props.addPost(newPostElement.current.value)}

    }

    return (
        <div className={style.posts__block}>
            <h3>My posts</h3>
            <div><textarea ref={newPostElement}>New post</textarea></div>
            <div>
                <button onClick={addPost}>Add post</button>
            </div>
            <div className={style.posts}>
                { postElements }
            </div>
        </div>
    );
};

export default MyPosts;