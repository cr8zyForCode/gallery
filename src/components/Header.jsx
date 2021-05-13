import React, { useState } from 'react';

import Description from './Header/Description.jsx';
import Rating from './Header/Rating.jsx';
import Location from './Header/Location.jsx';
import Button from './Header/Button.jsx';

import styles from './Header.scss';

export default ({ description, starRating, totalReviews, location, shareHandler }) => {
  // TODO: clean up commented out code
  return (
    <div className={styles.container}>
      {/* <div className={styles.textContainer}>   */}
      {/* <Description description={description} /> */}
      {/* <div className={styles.owner} > */}
      <div className={styles.text}>
        <ion-icon name="star"></ion-icon>
        <Rating starRating={starRating} totalReviews={totalReviews} />
        <Location location={location} />
      </div>
      <div className={styles.buttons}>
        <Button buttonName="Share" shareHandler={shareHandler} />
        <Button buttonName="Save" />
      </div>
      {/* </div> */}

    </div>
    // </div>
  )
};