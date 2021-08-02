import {ActionsType} from "./redux-store";


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
    isFetching: boolean
}


const initialState: UsersInitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
        case "TOGGLE_IS_FETCHING" :
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state
    }
}

export const follow = (userID: number) => ({type: "FOLLOW", userID}) as const
export const unfollow = (userID: number) => ({type: "UNFOLLOW", userID}) as const
export const setUsers = (users: Array<UserType>) => ({type: "SET_USERS", users}) as const
export const setCurrentPage = (currentPage: number) => ({
    type: 'SET_CURRENT_PAGE', currentPage: currentPage
}) as const

export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: 'SET_USERS_TOTAL_COUNT', count: totalUsersCount
}) as const

export const toggleIsFetching = (isFetching: boolean) => ({
    type: "TOGGLE_IS_FETCHING",
    isFetching: isFetching
}) as const

export default usersReducer
