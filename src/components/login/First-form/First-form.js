import React from 'react';
import styles from './First-form.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Firstform(props){
    const nav = useNavigate();   // initializing useNavigate
    const [email_address, set_email_address] = useState('');    // this state keeps track of the code that the user has typed
    const change_email_address = (event) => {set_email_address(event.target.value);}    // an arrow function that handels updating the "email_address" state based on an event
    const reroute_home = () => {nav('/', {replace:true});}  // an arrow function that reroutes the current url to '/', essencially swapping to the home page

    // this function is the main function when it comes to sending the email
    // it should call any other function that'll be used, and handle all of the logic 
    // behind sending the emails
    function send_email()
    {
        props.next_section();   // it calls to the "props.next_section" function, which as you know,
        // changes the displayed section to the second section 
    }

  return (
    <React.Fragment>
        <div className={styles.wrapper}>
            <div className={styles.background}/>
            <div className={styles.darken}/>
            <button className={styles.back_home} onClick={reroute_home}>Back Home</button>
            {/*notice that at the onClick event, the button calls the "reroute_home" function*/}
            <div className={styles.main_card_behind}/>
            <div className={styles.main_card}>
                <h1 className={styles.title}>Log In</h1>
                <form>
                    <div className={styles.input_wrapper}>
                        <div className={`${styles.envelope_image} ${styles.image}`}/>
                        <input type="text" className={styles.input} onChange={change_email_address} placeholder="Email address"/>
                         {/*notice that at the onChange event, the input calls the "change_email_address" function, keeping the "email_address" state updated */}
                    </div>
                        <button className={styles.button} onClick={send_email} >Send code</button>
                        <div className={styles.change_email}>Change email address</div>
                
                </form>
            </div>
        </div>
    </React.Fragment>
  );
}