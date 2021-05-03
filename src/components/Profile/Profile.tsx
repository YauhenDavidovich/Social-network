import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

// export type ProfilePropsType = {
//     posts: Array<PostType>
//     dispatch: (action: ActionsType) => void
//     newPostsText: string
// }

const Profile = (props:any) => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
};

export default Profile;
