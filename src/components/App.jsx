import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Header from './Header.jsx';
import Modal from './Modal.jsx';
import NavBar from './NavBar.jsx'
import Images from './Images.jsx'

import styles from './App.scss';

export default () => {
  const [superhost, setSuperhost] = useState('');
  const [home, setHome] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [allImages, setAllImages] = useState([]);

  const [isModalShowing, setModalShowing] = useState(false);
  const [modal, setModal] = useState(styles.hidden);

  let getHouse = () => {
    let id = Math.floor(Math.random() * 20);
    axios.get(`/properties/${id}`)
      .then((house) => {
        let houseInfo = house.data[0];
        setSuperhost(houseInfo.superhost);
        setHome(houseInfo);
        let kitchenObj = {
          imageURL: houseInfo.images.kitchen,
          description: 'kitchen'
        };
        let backyardObj = {
          imageURL: houseInfo.images.backyard,
          description: 'kitchen'
        };
        let houseObj = {
          imageURL: houseInfo.images.house,
          description: 'kitchen'
        };
        let arrayImages = [
          houseObj,
          backyardObj,
          kitchenObj,
          ...houseInfo.images.bedrooms,
          ...houseInfo.images.bathrooms,
        ];
        setAllImages(arrayImages);
        setLoading(false);
      })
      .catch(console.log)
  };

  let showAllImages = () => {
    if (isModalShowing) {
      setModal(styles.hidden);
      setModalShowing(false);
    } else {
      setModalShowing(true);
      setModal(styles.show);
    }
  };

  useEffect(() => {
    getHouse()
  }, []);
  //helloasdsdasdasdasd
  if (isLoading) {
    return (<div>...</div>)
  }
  return (
    <div className={styles.container}>
      <NavBar />
      {/* <div className={styles.content}> */}
      <Header description={home.description} starRating={home.starRating} totalReviews={home.reviewTotal} location={home.location} />
      <Images images={allImages} showAllImages={showAllImages} />
      {/* </div> */}
      <div className={modal}>
        <Modal showAllImages={showAllImages} allImages={allImages} />
      </div>
    </div>
  )
}