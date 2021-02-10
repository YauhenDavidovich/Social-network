import React from 'react';
import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>Profile</div>
            <div className={styles.item}>Messages</div>
            <div className={styles.item}>Music</div>
        </nav>
    );
};

export default Navbar;