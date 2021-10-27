import {ActionsType, BaseThunkType, InferActionsTypes} from "./redux-store";
import {api} from "../api/api";
import {Dispatch} from "redux";

const TOGGLE_IS_FETCHING = "/users/TOGGLE-IS-FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "/users/TOGGLE-FOLLOWING-IN-PROGRESS";
const SET_USERS = "/users/SET-USERS";
const FOLLOW = "/users/FOLLOW";
const UNFOLLOW = "/users/UNFOLLOW";
const SET_CURRENT_PAGE = "/users/SET-CURRENT-PAGE";
const SET_USERS_TOTAL_COUNT = "/users/SET-USERS-TOTAL-COUNT";


export type UserType = {
    id: number
    photos: UserPhoto
    followed: boolean
    name: string
    status: string
    location: UsersLocation
}

type UserPhoto = {
    small: string
    large: string
}

type UsersLocation = {
    city: string
    country: string
}

export type UsersInitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: number[]

}


const initialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state: UsersInitialStateType = initialState, action: ActionsType): UsersInitialStateType => {
    switch (action.type) {
        case FOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case SET_USERS :
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE :
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_USERS_TOTAL_COUNT :
            return {
                ...state,
                totalUsersCount: action.count
            }
        case TOGGLE_IS_FETCHING :
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS :
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userID: number) => ({type: FOLLOW, userID}) as const
export const unfollowSuccess = (userID: number) => ({type: UNFOLLOW, userID}) as const
export const setUsers = (users: Array<UserType>) => ({type: SET_USERS, users}) as const
export const setCurrentPage = (currentPage: number) => ({
    type: SET_CURRENT_PAGE, currentPage: currentPage
}) as const

export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_USERS_TOTAL_COUNT, count: totalUsersCount
}) as const

export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching
}) as const

export const toggleFollowingInProgress = (isFetching: boolean, userId: number) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching,
    userId
}) as const


export const requestUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(toggleIsFetching(true))
    dispatch(setCurrentPage(currentPage))
    let data = await api.getUsers(currentPage, pageSize)
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
}

export const follow = (userId: number) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let data = await api.follow(userId)
    if (data.resultCode === 0) {
        dispatch(followSuccess(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}


export const unfollow = (userId: number) => async (dispatch: Dispatch<ActionsType>) => {
    dispatch(toggleFollowingInProgress(true, userId));
    let data = await api.unfollow(userId)
    if (data.resultCode === 0) {
        dispatch(unfollowSuccess(userId))
    }
    dispatch(toggleFollowingInProgress(false, userId))
}

export default usersReducer
