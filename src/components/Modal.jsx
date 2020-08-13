import React, { useState } from 'react';

import ShareLikeButton from './Header/Button.jsx';

import CloseButton from './Modal/CloseButton.jsx';
import ScrollButton from './Modal/ScrollButton.jsx';

import styles from './Modal.scss';

export default ({ imgNumber, totalImages }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <CloseButton />
        <p className={styles.p}>{`${imgNumber}/${totalImages}`}</p>
        <div className={styles.buttons}>
          <ShareLikeButton buttonName={"Share"} isLabeled={false} />
          <ShareLikeButton buttonName={"Save"} isLabeled={false} />
        </div>
      </div>
      <div className={styles.display}>
        <ScrollButton direction="left" />
        <img src={`https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-rooms/room1.jpeg`} className={styles.img}></img>
        <ScrollButton direction="right" />
      </div >
    </div>
  )
}

