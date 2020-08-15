import React from 'react';

import styles from './PhotoBtn.scss';

export default ({ showAllImages }) => {
  let clickHanlder = () => {
    console.log('Clicked PhotoBtn')
    showAllImages()
  }
  return (
    <button className={styles.button} onClick={clickHanlder}>Show all photos</button>
  )
}