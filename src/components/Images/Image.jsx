import React from 'react';

import styles from './Image.scss';

export default ({ image, w, h, size = 'small', roundCorner }) => {
  let onMouseLeaveHandler = (e) => {
    e.target.style.filter = 'none'
  }

  let onMouseEnterHandler = (e) => {
    e.target.style.filter = ' brightness(80%)';
    e.target.style.transition = '.5s';
  }

  return (roundCorner === 'sharp')
    ? (<img src={image} className={styles[roundCorner]} width={w} height={h} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
    </img>)
    : (<img src={image} className={styles[size]} width={w} height={h} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
    </img>)
};
