import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header.jsx';
import Image from './Image.jsx';

import styles from './App.scss';

export default () => {
  const [home, setHome] = useState({});
  let imageUrl = "https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard1.jpeg"

  let getHouse = () => {
    let id = Math.floor(Math.random() * 20);
    axios.get(`/properties/${id}`)
      .then((house) => {
        setHome(house.data[0]);
        console.log('we received the house', house.data[0])
      })
      .then(() => {
        console.log(home, 'this should be an object')
      })
      .catch(console.log)
  }

  useEffect(() => {
    getHouse()
  }, []);

  return (
    <div className={styles.app}>
      <Header description={home.description} starRating={home.starRating} totalReviews={home.reviewTotal} location={home.location} />
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