import {combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, setUserProfile, updateNewPostTextAC} from "./profile-reducer";
import dialogsReducer, {sendMessageAC, updateNewMessageBodyAC} from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unfollow
} from "./users-reducer";
import authReducer, {setAuthUserData} from "./auth-reducer";


type AddPostActionType = ReturnType<typeof addPostAC>
type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>
type UpdateNewMessageBodyActionType = ReturnType<typeof updateNewMessageBodyAC>
type SendMessageActionType = ReturnType<typeof sendMessageAC>
type SetUsersActionType = ReturnType<typeof setUsers>
type FollowUserActionType = ReturnType<typeof follow>
type UnFollowUserActionType = ReturnType<typeof unfollow>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
type SetUsersTotalCountActionType = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
type SetUserProfileActionType = ReturnType<typeof setUserProfile>
type SetUserDataActionType = ReturnType<typeof setAuthUserData>


export type ActionsType =
    AddPostActionType
    | UpdateNewPostTextActionType
    | UpdateNewMessageBodyActionType
    | SendMessageActionType
    | SetUsersActionType
    | FollowUserActionType
    | UnFollowUserActionType
    | SetCurrentPageActionType
    | SetUsersTotalCountActionType
    | ToggleIsFetchingActionType
    | SetUserProfileActionType
    | SetUserDataActionType



const rootReducer = combineReducers({
        profilePage: profileReducer,
        dialogPage: dialogsReducer,
        sidebar: sidebarReducer,
        users: usersReducer,
        auth: authReducer
    }
)


export type AppRootStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer);
// @ts-ignore
window.store = store
export default store

