import {ActionsType} from "./redux-store";
import {Dispatch} from "redux";
import {api} from "../api/api";

const SET_USER_DATA = 'SET-USER-DATA';


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

export const getAuthUserData = () => (dispatch: Dispatch<any>) => {
    return api.checkAuth()
        .then(response => {
                debugger
                if (response.resultCode === 0) {
                    debugger
                    let {email, id, login} = response.data;
                    debugger
                    dispatch(setAuthUserData({id, login, email, isAuth: true}))
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
                } else (
                    alert(response.data.messages)
                )
            }
        )
        .catch((e) => {
            const error = e.response ? e.response.data.error : (e.message + ', more details in the console');
            alert(error)
            console.log('Error: ', {...e})
        })
}

export const logout = () => async (dispatch: Dispatch<any>) => {
    let data = await api.logout()
    if (data.data.resultCode === 0) {
        dispatch(setAuthUserData({id: null, email: null, login: null, isAuth: false}))
    }
}


export default authReducer
