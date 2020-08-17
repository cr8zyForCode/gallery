import React, { useState } from 'react';

import LargeImage from './Images/Image.jsx';
import SmallImage from './Images/Image.jsx';

import PhotoBtn from './Images/PhotoBtn.jsx';

import styles from './Images.scss';

export default ({ images, showAllImages }) => {

  return (
    <div className={styles.container}>
      <LargeImage image={images[0].imageURL} w="520" h="350" type="large" num={0} showAllImages={showAllImages} />

      <div className={styles.smallImages}>
        <SmallImage image={images[1].imageURL} type="center" w="260" h="171" num={1} showAllImages={showAllImages} />
        <SmallImage image={images[2].imageURL} type="center" w="260" h="171" num={2} showAllImages={showAllImages} />
      </div>

      <div className={styles.smallImages}>
        <SmallImage image={images[3].imageURL} type="topRight" w="260" h="171" num={3} showAllImages={showAllImages} />
        <SmallImage image={images[4].imageURL} type="bottomRight" w="260" h="171" showAllImages={showAllImages} num={4} />
      </div>

    </div>
  )
};