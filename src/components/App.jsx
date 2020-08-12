import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header.jsx';
import Image from './Image.jsx';

import styles from './App.scss';

export default () => {
  const [description, setDescription] = useState('');
  const [starRating, setStarRating] = useState('');
  const [reviewTotal, setReviewTotal] = useState('');
  const [superhost, setSuperhost] = useState('');
  const [location, setLocation] = useState('');
  const [images, setImages] = useState({});
  const [home, setHome] = useState({});

  let getHouse = () => {
    let id = Math.floor(Math.random() * 20);
    axios.get(`/properties/${id}`)
      .then((house) => {
        setDescription(house.data[0].description);
        setStarRating(house.data[0].starRating);
        setReviewTotal(house.data[0].reviewTotal);
        setSuperhost(house.data[0].superhost);
        setLocation(house.data[0].location);
        setImages(house.data[0].images);
        setHome(house.data[0]);
      })
      .catch(console.log)
  }

  useEffect(() => {
    getHouse()
  }, []);

  let imageUrl = "https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard1.jpeg";

  return (
    <div className={styles.app}>
      <Header description={description} starRating={starRating} totalReviews={reviewTotal} location={location} />
      <div className={styles.images}>
        <Image image={images.house} w="560" h="310" size='large' />
        <div className={styles.small}>
          <Image image={images.backyard} w="270" h="150" />
          <Image image={images.kitchen} w="270" h="150" />
          <Image image={imageUrl} w="270" h="150" />
          <Image image={imageUrl} w="270" h="150" />
        </div>
      </div>
    </div >
  )
}