import {ActionsType} from "./State";

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
    currentPage: number
}


const initialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1
}

const usersReducer = (state: UsersInitialStateType = initialState, action: ActionsType): UsersInitialStateType => {
    switch (action.type) {
        case "FOLLOW" :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case "UNFOLLOW" :
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }

        case "SET_USERS" :
            return {
                ...state,
                users: [...action.users]
            }
        case "SET_CURRENT_PAGE" :
            return {
                ...state,
                currentPage: action.currentPage
            }
        case "SET_USERS_TOTAL_COUNT" :
            return {
                ...state,
                totalUsersCount: action.count
            }


        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: "FOLLOW", userID}) as const
export const unfollowAC = (userID: number) => ({type: "UNFOLLOW", userID}) as const
export const setUsersAC = (users: Array<UserType>) => ({type: "SET_USERS", users}) as const
export const setCurrentPageAC = (currentPage: number) => ({type: "SET_CURRENT_PAGE", currentPage}) as const
export const setUsersTotalCountAC = (totalUsersCount: number) => ({type: "SET_USERS_TOTAL_COUNT", count: totalUsersCount}) as const


export default usersReducer
