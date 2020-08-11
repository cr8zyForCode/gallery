import React from 'react';

import Header from './Header.jsx';
import LargeImage from './LargeImage.jsx';

import styles from './App.scss';

export default () => {
  let imageUrl = "https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard1.jpeg"
  return (
    <div className={styles.app}>
      <Header />
      <LargeImage imageUrl={imageUrl} />
    </div >
  )
}
