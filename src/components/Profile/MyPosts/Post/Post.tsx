import React from 'react';
import style from "./Post.module.css";

type PostTypeProps = {
    message: string
}

const Post: React.FC<PostTypeProps> = (props) => {
    return (
        <div className={style.item}><img
            src='https://vokrug-tv.ru/pic/news/5/f/c/2/rsz300x300_5fc2879465129c11d65749ab9e3db7cc.jpg'></img>{props.message}
            <div><span>like</span></div>
        </div>
    )

}

export default Post;