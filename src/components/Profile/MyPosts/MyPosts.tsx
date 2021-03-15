import React, {ChangeEvent} from 'react';
import style from './MyPosts.module.css'
import Post from "./Post/Post";
import {ActionsType, addPostAC, ProfilePageType, updateNewPostTextAC} from "../../../redux/State";
import {ProfilePropsType} from "../Profile";

export type PostType = {
    id: number
    message: string
    likesCount: number
}


const MyPosts: React.FC<ProfilePropsType> = (props) => {

    let postElements = props.posts.map( p => <Post key = {p.id} message={p.message} likesCount={p.likesCount}/>)



    let addPost = () => {
        props.dispatch(addPostAC(props.newPostsText))
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(updateNewPostTextAC(e.currentTarget.value))
    }

    return (
        <div className={style.posts__block}>
            <h3>My posts</h3>
            <div><textarea onChange={onPostChange} value={props.newPostsText}/></div>
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
