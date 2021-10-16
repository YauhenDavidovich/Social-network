import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer, {addPostAC, setStatus, setUserProfile} from "./profile-reducer";
import dialogsReducer, {sendMessageAC} from "./dialog-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer, {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingInProgress,
    toggleIsFetching,
    unfollowSuccess
} from "./users-reducer";
import authReducer, {setAuthUserData} from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import appReducer, {setInitialised} from "./app-reducer";


type AddPostActionType = ReturnType<typeof addPostAC>
type SendMessageActionType = ReturnType<typeof sendMessageAC>
type SetUsersActionType = ReturnType<typeof setUsers>
type FollowUserActionType = ReturnType<typeof followSuccess>
type UnFollowUserActionType = ReturnType<typeof unfollowSuccess>
type SetCurrentPageActionType = ReturnType<typeof setCurrentPage>
type SetUsersTotalCountActionType = ReturnType<typeof setTotalUsersCount>
type ToggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
type SetUserProfileActionType = ReturnType<typeof setUserProfile>
type SetUserDataActionType = ReturnType<typeof setAuthUserData>
type ToggleIsFollowingInProgressActionType = ReturnType<typeof toggleFollowingInProgress>
type SetStatusActionType = ReturnType<typeof setStatus>
type SetInitialiseActionType = ReturnType<typeof setInitialised>


export type ActionsType =
    AddPostActionType
    | SendMessageActionType
    | SetUsersActionType
    | FollowUserActionType
    | UnFollowUserActionType
    | SetCurrentPageActionType
    | SetUsersTotalCountActionType
    | ToggleIsFetchingActionType
    | SetUserProfileActionType
    | SetUserDataActionType
    | ToggleIsFollowingInProgressActionType
    | SetStatusActionType
    | SetInitialiseActionType


const rootReducer = combineReducers({
        profilePage: profileReducer,
        dialogPage: dialogsReducer,
        sidebar: sidebarReducer,
        users: usersReducer,
        auth: authReducer,
        app: appReducer
}
)


export type AppRootStateType = ReturnType<typeof rootReducer>

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
// @ts-ignore
window.store = store
export default store

