import React from 'react';
import style from './../Diaologs.module.css'

export type MessageItemProps = {
    message: string,
    id: number
}

const Message: React.FC<MessageItemProps> = (props) => {
    return (
        <div className={style.message}>{props.message}</div>
    )
}

export default Message;