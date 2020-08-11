import React, { useState } from 'react';

import Description from './Header/Description.jsx';
import Rating from './Header/Rating.jsx';
import Location from './Header/Location.jsx';
import Button from './Header/Button.jsx';

import styles from './Header.scss';

export default () => {
  const [data, setData] = useState({});

  return (
    <div className={styles.header}>
      <Description description="Laguna Beach Home" />
      <div className={styles.owner} >
        <div className={styles.text}>
          <Rating starRating="4.95" totalReviews="69" />
          <Location location="Laguna Beach, CA United States" />
        </div>
        <div className={styles.buttons}>
          <Button buttonName="Share" />
          <Button buttonName="Save" />
        </div>
      </div>
    </div>
  )
};