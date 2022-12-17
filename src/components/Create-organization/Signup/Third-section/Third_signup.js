import styles from './Create_organization.module.css';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Secondsignup(){
    const nav = useNavigate();  // initializing useNavigate
    const [typed_code, set_typed_code] = useState('');    // this state keeps track of the code that the user has typed
    const change_typed_code = (event) => {set_typed_code(event.target.value);}  // an arrow function that handels updating the "typed_code" state based on an event
    const reroute_home = () => {nav('/', {replace:true});}  // an arrow function that reroutes the current url to '/', essencially swapping to the home page

  return (
    <React.Fragment>
        <div className={styles.wrapper}>
            <div className={styles.background}/>
            <div className={styles.darken}/>
            <button className={styles.back_home} onClick={reroute_home}>Back</button>
            {/*notice that at the onClick event, the button calls the "reroute_home" function*/}
            <div className={styles.main_card_behind}/>
            <div className={styles.main_card}>
                <h1 className={styles.title}>Sign Up</h1>
                <form>
                    <div className={styles.input_wrapper}>
                        <div className={`${styles.envelope_image} ${styles.image}`}/>
                        <input type="text" className={styles.input} onChange={change_typed_code} placeholder="Enter the code"/>
                        {/*notice that at the onChange event, the input calls the "change_typed_code" function, keeping the "typed_code" state updated */}
                    </div>
                        <button className={styles.button}>Login</button>
                        <div className={styles.resend_code}>Resend the code</div>
                
                </form>
            </div>
        </div>
    </React.Fragment>
  );
}