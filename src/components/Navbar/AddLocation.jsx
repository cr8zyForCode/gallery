import React from 'react';

import styles from './AddLocation.scss';

export default () => {
  return (
    <div className={styles.container}>
      <svg aria-hidden="true" viewBox="0 0 32 32" className={styles.icon}><g fill="none"><path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path></g></svg>
      <p className={styles.text}>Add a location</p>
    </div>
  )
};