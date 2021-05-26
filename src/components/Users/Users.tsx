import React from "react";
import styles from './Users.module.css';
import {UsersType} from "./UsersContainer";

let Users = (props: UsersType) => {
    debugger
    if (props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://img.tek.id/crop/600x400/content/2019/10/04/21135/begini-gambaran-proses-syuting-avatar-2-OUv6EI6mLH.jpg',
                followed: false,
                fullName: "Zhenya",
                status: "Hi",
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://img.tek.id/crop/600x400/content/2019/10/04/21135/begini-gambaran-proses-syuting-avatar-2-OUv6EI6mLH.jpg',
                followed: true,
                fullName: "Petya",
                status: "Hello",
                location: {city: 'Kiev', country: 'Ukraine'}
            },
            {
                id: 3,
                photoUrl: 'https://img.tek.id/crop/600x400/content/2019/10/04/21135/begini-gambaran-proses-syuting-avatar-2-OUv6EI6mLH.jpg',
                followed: false,
                fullName: "Anna",
                status: "Whats up!",
                location: {city: 'Moskow', country: 'Russia'}
            }])
    }

    return <div>
        {
            props.usersPage.users.map(u => <div key={u.id}>
                 <span>
                     <div><img src={u.photoUrl} className={styles.userPhoto}/></div>
                     <div>{
                         u.followed
                             ? <button onClick={() => {
                                 props.unfollow(u.id)
                             }}>unfollow</button>
                             : <button onClick={() => {
                                 props.follow(u.id)
                             }}>Follow</button>
                     }</div>
                 </span>
                <span>
                     <span>
                         <div>{u.fullName}</div>
                         <div>{u.status}</div>
                     </span>
                     <span>
                         <div>{u.location.country}</div>
                         <div>{u.location.city}</div>
                     </span>
                 </span>
            </div>)
        }
    </div>
}

export default Users
