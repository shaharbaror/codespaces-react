import React from 'react';
import styles from './Login.module.css';
import { useState } from 'react';
import Firstform from './First-form/First-form';
import Secondform from './Second-form/Second-form';

export default function Login() {
    //the login page is made out of 2 sections, where only one may be displayed at a time
    const [is_first_section, set_is_first_section] = useState(true);  // this state is true if the first section should be displayed,
    // turning to false when the second section be displayed.
    const change_to_second_section = () => {set_is_first_section(false)}; // an arrow function that changes the displayed section to the second one.

    // * some time i refer to sections as forms, since they are made out of a huge form
    
  return (
    <React.Fragment>
        {/* if the first section should be displayed, display it, if it doesn't then display the second section*/}
        {is_first_section ? <Firstform next_section={change_to_second_section}/> : <Secondform/>}
        {/*notice that the prop "next_section" passed to the Firstform is the function that changes the displayed section*/}
    </React.Fragment>
  );
}