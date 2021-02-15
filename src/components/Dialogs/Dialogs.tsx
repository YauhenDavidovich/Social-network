import React from 'react';
import style from './Diaologs.module.css'
import {NavLink} from 'react-router-dom'

type DialogItemProps = {
    name: string,
    id: string
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
    message: string
}
const Message: React.FC<MessageItemProps> = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__items}>
                <DialogItem id='1' name='Peter'/>
                <DialogItem id='2' name='Olga'/>
                <DialogItem id='3' name='Jack'/>
                <DialogItem id='4' name='Tomas'/>
            </div>

            <div className={style.messages}>
                <Message message='Hi!'/>
                <Message message='Yo!'/>
                <Message message='Thanks!'/>
                <Message message='Bye!'/>
            </div>
        </div>
    )

}

export default Dialogs;