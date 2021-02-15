import React from 'react';
import style from './Diaologs.module.css'


const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogs__items}>
                <div className={style.dialog + ' ' + style.active}>Peter</div>
                <div className={style.dialog}>Olga</div>
                <div className={style.dialog}>Jack</div>
                <div className={style.dialog}>Tomas</div>
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