import React from 'react';

import styles from './Image.scss';
import PhotoBtn from './PhotoBtn.jsx';

export default ({ image, w, h, type, showAllImages, num }) => {
  let onMouseLeaveHandler = (e) => {
    e.target.style.filter = 'none'
  };

  let onMouseEnterHandler = (e) => {
    e.target.style.filter = ' brightness(80%)';
    e.target.style.transition = '.5s';
  };

  let clickHandler = () => {
    showAllImages(num)
  }

  return (
    <div className={styles.btnContainer}>
      <img src={image} className={styles[type]} width={w} height={h} onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} onClick={clickHandler}>
      </img>
      {!(type === 'bottomRight') ? null : <PhotoBtn showAllImages={showAllImages} />}
    </div>
  )
};
