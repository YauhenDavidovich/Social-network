import React from 'react';
import style from './../Diaologs.module.css'
import {NavLink} from 'react-router-dom'

export type DialogItemProps = {
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

export default DialogItem;