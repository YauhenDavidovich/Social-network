import profileReducer, {addPostAC, ProfileInitialStateType} from "./profile-reducer";
import {PostType} from "../components/Profile/MyPosts/MyPosts";

test('new post should be added', () => {


    const startState: ProfileInitialStateType = {
        posts:
            [{id: 1, message: "Hi", likesCount: 4},
                {id: 2, message: "Hey", likesCount: 14},
                {id: 3, message: "Good day!", likesCount: 24},
                {id: 4, message: "Yo!", likesCount: 5},] as Array<PostType>,
        newPostsText: "type yor post here",
        profile: {
            userId: 0,
            fullName: "",
            aboutMe: "",
            contacts: { facebook: "",
                website: "",
                vk: "",
                twitter: "",
                instagram: "",
                youtube: "",
                github: "",
                mainLink: "",},
            lookingForAJob: false,
            lookingForAJobDescription: "",
            photos: { small: "",
                large: "",}
        },
        status: '',
    }

    const endState = profileReducer(startState, addPostAC("new post"))
    expect(endState.posts.length).toBe(5);
    expect(endState.posts[4].message).toBe("new post");
});
