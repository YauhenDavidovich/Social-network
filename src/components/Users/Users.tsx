import React from "react";
import styles from './Users.module.css';
import userPhoto from "../../assets/user-photo.png";
import {NavLink} from "react-router-dom";
import axios from "axios";


const Users = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p ? styles.selectedPage : ''}
                             onClick={(e) => {
                                 props.onPageChanged(p)
                             }}
                >{p}</span>
            })}

        </div>
        {
            props.usersPage.users.map((u: { id: string | number | null | undefined; photos: { small: string | null | undefined; }; followed: any; name: React.ReactNode; status: React.ReactNode; }) =>

                <div key={u.id}>

                 <span>
                     <NavLink to={`/profile/${u.id}`}><img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                                           className={styles.userPhoto}/></NavLink>
                     <div>{u.id}</div>
                     <div>{
                         u.followed
                             ? <button onClick={() => {
                                 axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                     {
                                         withCredentials: true,
                                         headers: {
                                             'API-KEY': '7182e7e1-cf7b-49da-8e89-52ae747000d8'
                                         }
                                     }).then(response => {
                                     if (response.data.resultCode === 0) {
                                         props.unfollow(u.id)
                                     }
                                 })

                             }}>Unfollow</button>
                             : <button onClick={() => {
                                 axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},
                                     {
                                         withCredentials: true,
                                         headers: {
                                             'API-KEY': '7182e7e1-cf7b-49da-8e89-52ae747000d8'
                                         }
                                     }).then(response => {
                                     if (response.data.resultCode === 0) {
                                         props.follow(u.id)
                                     }
                                 })
                             }}>Follow</button>
                     }</div>
                 </span>
                    <span>
                     <span>
                         <div>{u.name}</div>
                         <div>{u.status}</div>
                     </span>
                     <span>
                         <div>{'u.location.country'}</div>
                         <div>{'u.location.city'}</div>
                     </span>
                 </span>
                </div>)
        }
    </div>
}


export default Users
