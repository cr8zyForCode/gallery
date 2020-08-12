import React from 'react';

import styles from './Rating.scss';

const Rating = ({ starRating, totalReviews }) => {
  return (
    <div className={styles.container} >
      {/* <ion-icon name="star" /> */}
      <p className={styles.rating}>{starRating}</p>
      <p className={styles.reviews}>({totalReviews})</p>
    </div>
  )
}

export default Rating;