import React from 'react';


import Header from './Header.jsx';
import Image from './Image.jsx';

import styles from './App.scss';

export default () => {
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
      <div className={styles.images}>
        <Image image={imageUrl} w="560" h="310" size='large' />
        <div className={styles.small}>
          <Image image={imageUrl} w="270" h="150" />
          <Image image={imageUrl} w="270" h="150" />
          <Image image={imageUrl} w="270" h="150" />
          <Image image={imageUrl} w="270" h="150" />
        </div>
      </div>
    </div >
  )
}