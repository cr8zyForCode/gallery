import React from 'react';

import Logo from './NavBar/Logo.jsx';
import AddLocation from './NavBar/AddLocation.jsx';
import Buttons from './NavBar/Buttons.jsx';

import styles from './NavBar.scss';

export default () => {
  return (
    <div className={styles.container}>
      <Logo />
      <AddLocation />
      <Buttons />
    </div>
  )
};