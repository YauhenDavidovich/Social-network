import React from 'react';
import style from './Diaologs.module.css'
import {NavLink} from 'react-router-dom'

type DialogItemProps = {
    name: string,
    id: number
}
const DialogItem: React.FC<DialogItemProps> = (props) => {
    let path = '/dialogs/' + props.id
    return (
        <div className={style.dialog + ' ' + style.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageItemProps = {
    message: string,
    id: number

}
const Message: React.FC<MessageItemProps> = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: "Peter"},
        {id: 2, name: "Olga"},
        {id: 3, name: "Jack"},
        {id: 4, name: "Tomas"},
    ]

    let messages = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "Hi!"},
        {id: 3, message: "Whatsup!"},
        {id: 4, message: "Hey!"},
    ]

    let dialogElements = dialogs.map(d => <DialogItem id={d.id} name={d.name}/>)
    let messageElements = messages.map(m => <Message id={m.id} message={m.message}/>)

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