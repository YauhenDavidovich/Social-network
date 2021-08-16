import React, {ChangeEvent} from 'react';
import style from './Diaologs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import Login from "../Login/Login";


// type DialogsPropsType = {
//     dialogs: Array<DialogItemProps>
//     messages: Array<MessageItemProps>
//     newMessageBody: string
//     dispatch: (action: ActionsType) => void
// }

const Dialogs = (props:any) => {
    let state = props.dialogPage
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }
    const onSendMessageClick = () => {
        props.sendMessage()
    }
    let newMessageBody = state.newMessageBody
    let dialogElements = state.dialogs.map((d: { id: number; name: string; }) => <DialogItem id={d.id} name={d.name}/>)
    let messageElements = state.messages.map((m: { id: number; message: string; }) => <Message id={m.id} message={m.message}/>)


    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__items}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                <div>{messageElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={'Enter your message'}></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick} >Send</button>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Dialogs;
