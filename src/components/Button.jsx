import React from 'react';

import styles from './Button.scss';

export default ({ showImages }) => {
  let clickHanlder = () => {
    console.log('ive been clicked')
    showImages()
  }
  return (
    <button className={styles.button} onClick={clickHanlder}>Show all photos</button>
  )
}