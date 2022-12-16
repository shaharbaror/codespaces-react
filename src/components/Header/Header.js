import React from 'react';
import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';

export default function Header(props) {
    const nav = useNavigate();
    const reroute_login = () => {nav('/login', {replace:true});}

  return (
    <div className={`${styles.wrapper} ${props.className}`}>
        <h3 className={styles.message}>Welcome guest, please log in</h3>
        <div className={styles.logo}/>
        <button className={`${styles.login_btn} ${styles.btn}`} onClick={reroute_login}>Log In</button>
        <div className={`${styles.settings} ${styles.btn}`}></div>
    </div>
  );
}
