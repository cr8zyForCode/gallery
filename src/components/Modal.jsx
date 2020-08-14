import React, { useState } from 'react';

import ShareLikeButton from './Header/Button.jsx';

import CloseButton from './Modal/CloseButton.jsx';
import ScrollButton from './Modal/ScrollButton.jsx';

import styles from './Modal.scss';

export default ({ imgNumber, totalImages, showImages, images }) => {
  //get all the images

  let clickHanlder = () => {
    console.log('ive been clicked')
    showImages()
  }

  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <CloseButton showImages={showImages} />
        <p className={styles.p}>{`${imgNumber}/${totalImages}`}</p>
        <div className={styles.buttons}>
          <ShareLikeButton buttonName={"Share"} isLabeled={false} />
          <ShareLikeButton buttonName={"Save"} isLabeled={false} />
        </div>
      </div>
      <div className={styles.display}>
        <ScrollButton direction="left" />
        <div className={styles.imgContainer}>
          <img src={images.backyard} className={styles.img} height='510'></img>
        </div>
        <ScrollButton direction="right" />
      </div >
      <div className={styles.other}>

      </div>
    </div>
  )
};

