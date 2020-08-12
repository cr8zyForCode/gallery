import React from 'react';

import Description from './Header/Description.jsx';
import Rating from './Header/Rating.jsx';
import Location from './Header/Location.jsx';
import Button from './Header/Button.jsx';

import styles from './Header.scss';

export default ({ description, starRating, totalReviews, location }) => {

  return (
    <div className={styles.header}>
      <Description description={description} />
      <div className={styles.owner} >
        <div className={styles.text}>
          <Rating starRating={starRating} totalReviews={totalReviews} />
          <Location location={location} />
        </div>
        <div className={styles.buttons}>
          <Button buttonName="Share" />
          <Button buttonName="Save" />
        </div>
      </div>
    </div>
  )
};