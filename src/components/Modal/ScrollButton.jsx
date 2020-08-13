import React, { useState } from 'react';

import styles from './ScrollButton.scss';

export default ({ direction }) => {
  let onClickHandler = ({ direction }) => {
    console.log('i have been clicked')
  }

  let directionSign;

  (direction === 'right') ? directionSign = <svg aria-hidden="true" focusable="false" viewBox="0 0 32 32" className={styles.svg}><g fill="none"><path d="m12 4 11.2928932 11.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136l-11.2928932 11.2928932"></path></g></svg> : directionSign = <svg aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" className={styles.svg}><g fill="none"><path d="m20 28-11.29289322-11.2928932c-.39052429-.3905243-.39052429-1.0236893 0-1.4142136l11.29289322-11.2928932"></path></g></svg>

  return (
    <button onClick={onClickHandler} className={styles.button}>{directionSign}</button>
  )
};