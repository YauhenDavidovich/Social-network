import React from "react";
import styles from './Users.module.css';
import {UsersType} from "./UsersContainer";
import axios from "axios";
import userPhoto from "../../assets/user-photo.png";

class Users extends React.Component<any, any> {
    getUsers = () => {
        if (this.props.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {this.props.setUsers(response.data.items)})
        }
    }
    render() {
        return <div>
            <button onClick={this.getUsers}>Get Users</button>
            {
                this.props.usersPage.users.map((u: { id: string | number | null | undefined; photos: { small: string | null | undefined; }; followed: any; name: React.ReactNode; status: React.ReactNode; }) => <div key={u.id}>
                 <span>
                     <div><img src={u.photos.small !== null ? u.photos.small : userPhoto} className={styles.userPhoto}/></div>
                     <div>{
                         u.followed
                             ? <button onClick={() => {
                                 this.props.unfollow(u.id)
                             }}>unfollow</button>
                             : <button onClick={() => {
                                 this.props.follow(u.id)
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
}



export default Users
