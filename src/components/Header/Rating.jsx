import React from 'react';
//import data with a call

const Rating = ({ starRating, totalReviews }) => {
  let styles = {
    display: 'flex',
    padding: '0',
    margin: '0'

  }
  return (
    <div className="rating" style={styles}>
      <ion-icon name="star-outline"></ion-icon>
      <p>{starRating}</p>
      <p>({totalReviews})</p>
    </div>
  )
}

export default Rating;