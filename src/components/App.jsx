import React, { useEffect, useState } from 'react';
import axios from 'axios';

import NavBar from './NavBar.jsx'
import Header from './Header.jsx';
import Images from './Images.jsx'
import Modal from './Modal.jsx';
import ShareModal from './ShareModal.jsx';


import styles from './App.scss';

export default () => {
  const [superhost, setSuperhost] = useState('');
  const [home, setHome] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [allImages, setAllImages] = useState([]);

  const [isModalShowing, setModalShowing] = useState(false);
  const [modal, setModal] = useState(styles.hidden);

  const [shareModal, setShareModal] = useState(styles.hideShareModal);
  const [isShowingShareModal, setShowingShareModal] = useState(false);

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
      setModalShowing(false);
      setModal(styles.hidden);
    } else {
      setModalShowing(true);
      setModal(styles.show);
    }
  };

  let shareHandler = () => {
    if (isShowingShareModal) {
      setShowingShareModal(false);
      setShareModal(styles.hideShareModal);
    } else {
      setShowingShareModal(true);
      setShareModal(styles.showShareModal);
    }
  };

  useEffect(() => {
    getHouse()
  }, []);
  if (isLoading) {
    return (<div>...</div>)
  }
  return (
    <div className={styles.container}>
      <NavBar />
      <Header description={home.description} starRating={home.starRating} totalReviews={home.reviewTotal} location={home.location} shareHandler={shareHandler} />
      <Images images={allImages} showAllImages={showAllImages} />
      <div className={modal}>
        <Modal showAllImages={showAllImages} allImages={allImages} shareHandler={shareHandler} />
      </div>
      <div className={shareModal}>
        <ShareModal shareHandler={shareHandler} />
      </div>
    </div>
  )
}