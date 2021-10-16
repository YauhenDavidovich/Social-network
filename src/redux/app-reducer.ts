import {ActionsType} from "./redux-store";
import {getAuthUserData} from "./auth-reducer";
import {Dispatch} from "redux";

const SET_INITIALISED = 'SET_INITIALISED';

export type InitialisedType = {
    initialised: boolean,
}

const initialState:InitialisedType = {
    initialised: false
}

export type AppInitialStateType = typeof initialState

const appReducer = (state: AppInitialStateType = initialState, action: ActionsType): InitialisedType => {
    switch (action.type) {
        case SET_INITIALISED:
            return {
                ...state,
                initialised: action.payload
            }
        default:
            return state
    }
}

export const setInitialised  = (payload: boolean) => {
    return {
        type: SET_INITIALISED, payload
    } as const
}

export const initialiseApp = () => (dispatch: Dispatch<any>) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(setInitialised(true))
        })
}




export default appReducer
