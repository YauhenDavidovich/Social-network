import React from 'react';
import style from './Diaologs.module.css'
import DialogItem, {DialogItemProps} from "./DialogItem/DialogItem";
import Message, {MessageItemProps} from "./Message/Message";

type DialogsTypeProps = {
    dialogs: Array<DialogItemProps>
    messages: Array<MessageItemProps>
}

const Dialogs = (props:DialogsTypeProps) => {
    let dialogElements = props.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageElements = props.messages.map(m => <Message id={m.id} message={m.message}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__items}>
                {dialogElements}
            </div>
            <div className={style.messages}>
                {messageElements}
            </div>
        </div>
    )

}

export default Dialogs;