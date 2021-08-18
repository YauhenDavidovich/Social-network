import React from 'react';
import styles from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/user-photo.png";
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props: any) => {
    debugger
    if (!props.profile) {
        return <Preloader/>
    }
    debugger
    return (
        <div>
            <div className={styles.description__block}>

                <img src={props.profile.photos.large ? props.profile.photos.large : userPhoto}/>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                <div>{props.profile.fullName}</div>
            </div>
        </div>
    );
};

export default ProfileInfo;
