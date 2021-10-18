import {AppRootStateType} from "./redux-store";

export const getUsers = (state: AppRootStateType) => {
    return state.users.users
}

export const getPageSize = (state: AppRootStateType) => {
    return state.users.pageSize
}

export const getTotalUsersCount = (state: AppRootStateType) => {
    return state.users.totalUsersCount
}

export const getCurrentPage = (state: AppRootStateType) => {
    return state.users.currentPage
}

export const getIsFetching = (state: AppRootStateType) => {
    return state.users.isFetching
}

export const getFollowingInProgress = (state: AppRootStateType) => {
    return state.users.followingInProgress
}




