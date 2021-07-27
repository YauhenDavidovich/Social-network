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
    users: Array<UserType>
}


const initialState: UsersInitialStateType = {
    users: []
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
                users: [...state.users, ...action.users]
            }


        default:
            return state
    }
}

export const followAC = (userID: number) => ({type: "FOLLOW", userID}) as const
export const unfollowAC = (userID: number) => ({type: "UNFOLLOW", userID}) as const
export const setUsersAC = (users: Array<UserType>) => ({type: "SET_USERS", users}) as const


export default usersReducer
