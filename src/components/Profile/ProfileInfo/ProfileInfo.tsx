import React from 'react';
import styles from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkHIXlWZwX8_MOjlmFPqY5kRRCayLbVVnqA&usqp=CAU'/>
            </div>
            <div className={styles.description__block}>Ava+Description</div>
        </div>
    );
};

export default ProfileInfo;