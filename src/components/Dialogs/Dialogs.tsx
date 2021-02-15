import React from 'react';
import style from './Diaologs.module.css'
import {NavLink} from 'react-router-dom'

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__items}>
                <div className={style.dialog + ' ' + style.active}>
                    <NavLink to='/dialogs/1'>Peter</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/2'>Olga</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/3'>Jack</NavLink>
                </div>
                <div className={style.dialog}>
                    <NavLink to='/dialogs/4'>Tomas</NavLink>
                </div>

            </div>

            <div className={style.messages}>
                <div className={style.message}>Hi!</div>
                <div className={style.message}>Yo!</div>
                <div className={style.message}>Thanks!</div>
                <div className={style.message}>Bye</div>
            </div>
        </div>
    )

}

export default Dialogs;