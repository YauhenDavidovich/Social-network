import {ActionsType, DialogPageType} from "./State";

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
    newMessageBody: "",
}

export type DialogInitialStateType = typeof initialState

const dialogsReducer = (state: DialogInitialStateType = initialState, action: ActionsType): DialogInitialStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return {
                ...state,
                newMessageBody: action.body
            };
        case "SEND-MESSAGE":
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            };
        default:
            return state
    }
}

export default dialogsReducer
