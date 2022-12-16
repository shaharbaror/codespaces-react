import React from 'react';
import styles from './Login.module.css';
import { useState } from 'react';

export default function Login() {
    const [username, set_username] = useState('');
    const [password, set_password] = useState('');
    const change_username = (event) => {set_username(event.target.value);}
    const change_password = (event) => {set_password(event.target.value);}

  return (
    <React.Fragment>
        <div className={styles.wrapper}>
            <div className={styles.background}/>
            <div className={styles.darken}/>
            <button className={styles.back_home}>Back Home</button>
            <div className={styles.main_card_behind}/>
            <div className={styles.main_card}>
                <h1 className={styles.title}>Log In</h1>
                <form>
                    <div className={`${styles.input_wrapper} ${styles.username_wrapper}`}>
                        <div className={`${styles.user_image} ${styles.image}`}/>
                        <input type="text" className={`${styles.input} ${styles.username}`} onKeyDown={change_username} onKeyUp={change_username} placeholder="Username"/>
                    </div>
                        <button className={styles.button}> Sign in </button>
                        <div className={styles.forgot_password}>Forgot Password?</div>
                
                </form>
            </div>
        </div>
    </React.Fragment>
  )
}