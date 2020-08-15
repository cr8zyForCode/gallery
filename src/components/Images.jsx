import React, { useState } from 'react';

import LargeImage from './Images/Image.jsx';
import SmallImage from './Images/Image.jsx';

import PhotoBtn from './Images/PhotoBtn.jsx';

import styles from './Images.scss';

export default ({ images, showAllImages }) => {
  return (
    <div className={styles.container}>
      <div className={styles.largeImage}>
        <LargeImage image={images[0].imageURL} w="560" h="311" roundCorner="round" size='large' />
      </div>

      <div className={styles.smallImages}>
        <SmallImage image={images[1].imageURL} roundCorner="sharp" w="270" h="149" />
        <SmallImage image={images[2].imageURL} roundCorner="round" w="270" h="149" />
        <SmallImage image={images[3].imageURL} roundCorner="sharp" w="270" h="149" />
        <div className={styles.btnContainer}>
          <SmallImage image={images[4].imageURL} roundCorner="round" w="270" h="149" />
          <PhotoBtn showAllImages={showAllImages} />
        </div>

      </div>
    </div>
  )
};