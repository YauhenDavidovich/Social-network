import React, {ChangeEvent} from 'react';
import style from './Diaologs.module.css'
import DialogItem, {DialogItemProps} from "./DialogItem/DialogItem";
import Message, {MessageItemProps} from "./Message/Message";
import {ActionsType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/State";

type DialogsTypeProps = {
    dialogs: Array<DialogItemProps>
    messages: Array<MessageItemProps>
    newMessageBody: string
    dispatch: (action: ActionsType) => void
}

const Dialogs: React.FC<DialogsTypeProps>= (props) => {
    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.currentTarget.value
        props.dispatch(updateNewMessageBodyAC(body))
    }
    const onSendMessageClick = () => {
        props.dispatch(sendMessageAC())
    }
    let newMessageBody = props.newMessageBody


    let dialogElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageElements = props.messages.map(m => <Message id={m.id} message={m.message}/>)

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
