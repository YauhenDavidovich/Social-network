import React from "react";
import styles from './Users.module.css';
import userPhoto from "../../assets/user-photo.png";
import {NavLink} from "react-router-dom";
import {api} from "../../api/api";


const Users = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    debugger
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
            props.usersPage.users.map((u: { id: string | number| null | undefined; photos: { small: string | null | undefined; }; followed: any; name: React.ReactNode; status: React.ReactNode; }) =>

                <div key={u.id}>

                 <span>
                     <NavLink to={`/profile/${u.id}`}><img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                                           className={styles.userPhoto}/></NavLink>
                     <div>{u.id}</div>
                     <div>{
                         u.followed

                             ? <button disabled={
                                 props.followingInProgress.some((id: string | number) => id === u.id)}
                                       onClick={() => {
                                           props.toggleFollowingInProgress(true)
                                           api.unfollow(u.id).then(data => {
                                               if (data.resultCode === 0) {
                                                   props.unfollow(u.id)
                                               }
                                               props.toggleFollowingInProgress(false, u.id)
                                           })

                                       }}>Unfollow</button>
                             : <button
                                 disabled={props.followingInProgress.some((id: string | number) => id === u.id)}
                                 onClick={() => {
                                     console.log(props.followingInProgress)
                                     props.toggleFollowingInProgress(true)
                                     api.follow(u.id).then(data => {
                                         if (data.resultCode === 0) {
                                             props.follow(u.id)
                                         }
                                         props.toggleFollowingInProgress(false, u.id)
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
