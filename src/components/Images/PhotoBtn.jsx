import React from 'react';

import styles from './PhotoBtn.scss';

export default ({ showAllImages }) => {
  let clickHanlder = () => {
    console.log('Clicked PhotoBtn')
    showAllImages()
  }
  let onMouseLeaveHandler = (e) => {
    console.log('this works. dont leave')
    e.target.style.background = '#ffffff';

  }

  let onMouseEnterHandler = (e) => {
    e.target.style.background = '#f7f7f7';
    // e.target.style.transition = '.5s';
    console.log('this works. hello')
  }
  return (
    <button className={styles.button} onClick={clickHanlder} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>Show all photos</button>
  )
}