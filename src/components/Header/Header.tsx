import React from 'react';
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom'

const Header = (props: any) => {
    return (
        <header className={styles.header}>
            <img src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/07/door-company-logo.jpg"/>
            <div className={styles.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
};


export default Header;
