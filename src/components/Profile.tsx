import React from 'react';
import styles from './Profile.module.css'


const Profile = () => {
    return (
        <div className={styles.content}>
            <div><img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJkHIXlWZwX8_MOjlmFPqY5kRRCayLbVVnqA&usqp=CAU'/>
            </div>
            <div>Ava+Description</div>
            <div>My posts
                <div>New post</div>
                <div>
                    <div className={styles.item}>Post1</div>
                    <div className={`${styles.item} ${styles.active}`}>Post2</div>
                </div>
            </div>

        </div>
    );
};

export default Profile;