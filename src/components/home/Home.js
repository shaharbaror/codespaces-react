import React from 'react';
import Header from '../Header/Header';
import styles from './Home.module.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const nav = useNavigate();   // initializing useNavigate
  const reroute_create_org = () => {nav('/new-organization', {replace:true});}  


  return (
    <React.Fragment>
      <Header/>
      <div className={styles.section_one}>
        <div className={styles.pic}/>
      </div>
      <div className={styles.section_one}>
        <button onClick={reroute_create_org}>Press Here to create a new organization</button>
      </div>

    </React.Fragment>
  );
}
