import React from 'react';
import styles from './First-form.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Firstform(props){
    const nav = useNavigate();
    const [email_address, set_email_address] = useState('');
    const change_email_address = (event) => {set_email_address(event.target.value);}
    const reroute_home = () => {nav('/', {replace:true});}

    function send_email()
    {
        props.next_section();
    }

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
                        <input type="text" className={styles.input} onChange={change_email_address} placeholder="Email address"/>
                    </div>
                        <button className={styles.button} onClick={send_email} >Send code</button>
                        <div className={styles.change_email}>Change email address</div>
                
                </form>
            </div>
        </div>
    </React.Fragment>
  )
}