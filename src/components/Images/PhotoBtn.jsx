import React from 'react';

import styles from './PhotoBtn.scss';

export default ({ showAllImages }) => {
  let clickHanlder = () => {
    showAllImages()
  }

  let onMouseLeaveHandler = (e) => {
    e.target.style.background = '#ffffff';
  }

  let onMouseEnterHandler = (e) => {
    e.target.style.background = '#f7f7f7';
  }
  return (
    <button className={styles.button} onClick={clickHanlder} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>Show all photos</button>
  )
}