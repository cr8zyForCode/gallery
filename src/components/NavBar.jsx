import React from 'react';

import Logo from './NavBar/Logo.jsx';
import AddLocation from './NavBar/AddLocation.jsx';

import DropdownButton from './NavBar/Button1.jsx';
import RightButton from './NavBar/Button2.jsx';

import styles from './NavBar.scss';
//asdasfssdasd
export default () => {
  return (
    <div className={styles.container}>

      <div className={styles.logo}>
        <Logo />
      </div>

      <div className={styles.location}>
        <AddLocation />
      </div>

      <div className={styles.buttonContainer}>
        <DropdownButton />
        <RightButton />
      </div>

    </div>
  )
};