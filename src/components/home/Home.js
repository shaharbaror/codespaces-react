import React from 'react';
import Header from '../Header/Header';
import styles from './Home.module.css';

export default function Home() {
  return (
    <React.Fragment>
      <Header/>
      <div className={styles.section_one}>
        <div className={styles.pic}/>
      </div>

    </React.Fragment>
  );
}
