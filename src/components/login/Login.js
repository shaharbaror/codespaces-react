import React from 'react';
import styles from './Login.module.css';
import { useState } from 'react';
import Firstform from './First-form/First-form';
import Secondform from './Second-form/Second-form';

export default function Login() {
    const [is_first_section, set_is_first_section] = useState(true);
    const change_to_second_section = () => {set_is_first_section(false)};

  return (
    <React.Fragment>
        {is_first_section ? <Firstform next_section={change_to_second_section}/> : <Secondform/>}
    </React.Fragment>
  )
}