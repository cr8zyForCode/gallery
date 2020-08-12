import React from 'react';

import styles from './Image.scss';

export default ({ image, w, h, size = 'small' }) => {
  let onMouseLeaveHandler = (e) => {
    e.target.style.filter = 'none'
  }

  let onMouseEnterHandler = (e) => {
    e.target.style.filter = ' brightness(80%)';
    e.target.style.transition = '.5s';
  }

  return (
    <img src={image} className={styles[size]} width={w} height={h} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}></img>
  )
}
