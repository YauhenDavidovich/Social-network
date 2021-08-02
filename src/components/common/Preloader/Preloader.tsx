import React from 'react'
import preloader from '../../../assets/bars.svg'
import style from './Preloader.module.css'
const Preloader = (props:any) =>{
    return (
        <div className={style.preloader}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader
