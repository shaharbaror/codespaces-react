import React from 'react';
import styles from './Second-form.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Secondform(){
    const nav = useNavigate();
    const [email_address, set_email_address] = useState('');
    const change_email_address = (event) => {set_email_address(event.target.value);}
    const reroute_home = () => {nav('/', {replace:true});}

  return (
    <React.Fragment>
        <div className={styles.wrapper}>
            <div className={styles.background}/>
            <div className={styles.darken}/>
            <button className={styles.back_home} onClick={reroute_home}>Back Home</button>
            <div className={styles.main_card_behind}/>
            <div className={styles.main_card}>
                <h1 className={styles.title}>Log In</h1>
                <form>
                    <div className={styles.input_wrapper}>
                        <div className={`${styles.envelope_image} ${styles.image}`}/>
                        <input type="text" className={styles.input} onChange={change_email_address} placeholder="Enter the code"/>
                    </div>
                        <button className={styles.button}>Login</button>
                        <div className={styles.resend_code}>Resend the code</div>
                
                </form>
            </div>
        </div>
    </React.Fragment>
  )
}