import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {api} from "../api/api";

const SET_USER_DATA = '/auth/SET-USER-DATA';


const initialState = {
    id: null as number | null,
    login: null as string | null,
    email: null as string | null,
    isAuth: false
}

export type UsersAuthDataType = typeof initialState;


export type AuthInitialStateType = typeof initialState

const authReducer = (state: AuthInitialStateType = initialState, action: ActionsType): AuthInitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export const setAuthUserData = (payload: UsersAuthDataType) => ({type: SET_USER_DATA, payload}) as const

export const getAuthUserData = () => async (dispatch: Dispatch<any>) => {
    let response = await api.checkAuth();
    if (response.resultCode === 0) {
        let {email, id, login} = response.data;
        dispatch(setAuthUserData({id, login, email, isAuth: true}))
    }
}

export const login = (email: string, password: string, rememberMe: boolean) => async (dispatch: Dispatch<any>) => {
    let response = await api.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else (
        alert(response.data.messages)
    )
}

export const logout = () => async (dispatch: Dispatch<any>) => {
    let response = await api.logout()
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData({id: null, email: null, login: null, isAuth: false}))
    }
}


export default authReducer
