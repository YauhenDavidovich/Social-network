import {ActionsType} from "./redux-store";

export type DialogType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs:
        [{id: 1, name: "Peter"},
            {id: 2, name: "Olga"},
            {id: 3, name: "Jack"},
            {id: 4, name: "Tomas"},] as Array<DialogType>,
    messages:
        [{id: 1, message: "Hi!"},
            {id: 2, message: "Hi!"},
            {id: 3, message: "Whatsup!"},
            {id: 4, message: "Hey!"},] as Array<MessageType>,
}

export type DialogInitialStateType = typeof initialState

const dialogsReducer = (state: DialogInitialStateType = initialState, action: ActionsType): DialogInitialStateType => {
    switch (action.type) {

        case "SEND-MESSAGE":
            let body = action.message
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state
    }
}

export const sendMessageAC = (message: string) => {
    return {
        type: "SEND-MESSAGE",
        message: message
    } as const
}

export default dialogsReducer
