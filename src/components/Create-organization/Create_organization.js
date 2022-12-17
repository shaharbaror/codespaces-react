import styles from './Create_organization.module.css';
import React from 'react';
import Header from '../Header/Header';
import Firstsignup from './Signup/First-section/First_signup';
import Secondsignup from './Signup/Second-section/Second_signup';
import { useState } from 'react';

export default function Create_organization() {  

    //the login page is made out of 2 sections, where only one may be displayed at a time
    const [which_section, set_which_section] = useState(true);  // this state holds the number of the current section, (in chronological order)
    // turning to false when the second section be displayed.
    const change_which_section = () => {set_which_section(false)}; // an arrow function that changes the displayed section to the second one.
    // need to use usereducer
    // * some time i refer to sections as forms, since they are made out of a huge form
    return (
        <React.Fragment>
            {/* if the first section should be displayed, display it, if it doesn't then display the second section*/}
            {which_section ? <Firstsignup next_section={change_which_section}/> : <Secondsignup next_section={change_which_section}/>}
            {/*notice that the prop "next_section" passed to the Firstform is the function that changes the displayed section*/}
        </React.Fragment>
        );
}
