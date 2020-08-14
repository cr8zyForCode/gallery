import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header.jsx';
import Image from './Image.jsx';
import Modal from './Modal.jsx';
import Button from './Button.jsx'

import styles from './App.scss';

export default () => {
  const [superhost, setSuperhost] = useState('');
  const [images, setImages] = useState({});
  const [home, setHome] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isModalShowing, setModal] = useState(false);

  let getHouse = () => {
    let id = Math.floor(Math.random() * 20);
    axios.get(`/properties/${id}`)
      .then((house) => {
        setSuperhost(house.data[0].superhost);
        setImages(house.data[0].images);
        setHome(house.data[0]);
        setLoading(false);
      })
      .catch(console.log)
  };

  let showImages = () => {
    if (isModalShowing) {
      setModal(false);
    } else {
      setModal(true);
    }
  };

  useEffect(() => {
    getHouse()
  }, []);

  if (isLoading) {
    return (<div>...</div>)
  }

  if (!isModalShowing) {
    return (
      <div className={styles.app}>
        <Header description={home.description} starRating={home.starRating} totalReviews={home.reviewTotal} location={home.location} />
        <div className={styles.images}>
          <Image image={images.house} w="560" h="310" size='large' />
          <div className={styles.small}>
            <Image image={images.backyard} w="270" h="150" />
            <Image image={images.kitchen} w="270" h="150" />
            <Image image={images.bedrooms[0].imageURL} w="270" h="150" />
            <div className={styles['image-button']}>
              <Image image={images.bathrooms[0].imageURL} w="270" h="150" />
              <Button showImages={showImages} />
            </div>
          </div>
        </div>
      </div >
    )

  } else {
    return (
      <Modal imgNumber={4} totalImages={20} showImages={showImages} images={images} />
    )
  }
}