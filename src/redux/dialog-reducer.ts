import {ActionsType, DialogPageType} from "./State";


let initialState = {
    dialogs:
        [{id: 1, name: "Peter"},
            {id: 2, name: "Olga"},
            {id: 3, name: "Jack"},
            {id: 4, name: "Tomas"},],
    messages:
        [{id: 1, message: "Hi!"},
            {id: 2, message: "Hi!"},
            {id: 3, message: "Whatsup!"},
            {id: 4, message: "Hey!"},],
    newMessageBody: "",
}

const dialogsReducer = (state: DialogPageType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body
            return state
        case "SEND-MESSAGE":
            let body = state.newMessageBody
            state.newMessageBody = ''
            state.messages.push({id: 6, message: body})
            return state
        default:
            return state
    }
}

export default dialogsReducer
