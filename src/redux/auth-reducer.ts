import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {api} from "../api/api";
import {setStatus} from "./profile-reducer";

const SET_USER_DATA = 'SET-USER-DATA';


const initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export type AuthInitialStateType = typeof initialState

const authReducer = (state: AuthInitialStateType = initialState, action: ActionsType): AuthInitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        default:
            return state
    }
}

export const setAuthUserData = (userId: any, email: any, login: any, isAuth: boolean) => {
    return {
        type: SET_USER_DATA,
        data: {userId, email, login, isAuth }
    } as const
}

export const getAuthUserData = () => (dispatch: Dispatch<any>) => {
    api.checkAuth()
        .then(response => {
            debugger
                if (response.resultCode === 0) {
                    let {userId, login, email} = response.data;
                    dispatch(setAuthUserData(userId, login, email, true))
                }
            }
        )
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    api.login(email, password, rememberMe)
        .then(response => {
            debugger
                if (response.data.resultCode === 0) {
                    dispatch(getAuthUserData())
                }
            }
        )
}

export const logout = () => (dispatch: Dispatch<any>) => {
    debugger
    api.logout()
        .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            }
        )
}


export default authReducer
