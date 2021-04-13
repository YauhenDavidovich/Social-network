import React, {ChangeEvent} from 'react';
import style from './Diaologs.module.css'
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/State";
import Dialogs from "./Dialogs";


// type DialogsPropsType = {
//     dialogs: Array<DialogItemProps>
//     messages: Array<MessageItemProps>
//     newMessageBody: string
//     dispatch: (action: ActionsType) => void
// }

const DialogsContainer = (props: any) => {
    debugger
    let state = props.store.getState().dialogPage;

    const onSendMessageClick= () => {
        props.store.dispatch(sendMessageAC())
    }
    const onNewMessageChange = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }


    return (
        <Dialogs updateNewMessageBody={onNewMessageChange} sendMessage={onSendMessageClick} dialogsPage={state}/>
    )

}

export default  DialogsContainer
