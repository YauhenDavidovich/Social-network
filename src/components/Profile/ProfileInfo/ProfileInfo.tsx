import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";


const ProfileInfo = (props: any) => {
    debugger
    if(!props.profile) {
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkHIXlWZwX8_MOjlmFPqY5kRRCayLbVVnqA&usqp=CAU'/>
            </div>
            <div className={styles.description__block}>

                <img src={props.profile.photos.large}/>
                Ava+Description</div>
        </div>
    );
};

export default ProfileInfo;
