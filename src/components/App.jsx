import React from 'react';


import Header from './Header/Header.jsx';
import SmallImages from './SmallImages.jsx';
import LargeImage from './LargeImage.jsx';

import styles from './App.scss';

export default () => {
  const App = () => {
    let sampleImages = [
      ('https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard1.jpeg'),
      ('https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard1.jpeg'),
      ('https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard1.jpeg'),
      ('https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard1.jpeg'),
      ('https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard1.jpeg')
    ];
    let imageUrl = "https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard1.jpeg"

    return (
      <div className={styles.app}>
        <Header />
        <LargeImage imageUrl={imageUrl} />
        <SmallImages images={sampleImages} />
      </div >
    )
  }
}