import React from 'react';
//import data with a call

const Rating = ({ starRating, totalReviews }) => {
  let containerStyle = {
    display: 'flex',
    fontSize: '14px'
  };
  let totalReviewStyles = {
    cursor: 'pointer',
  };
  let starRatingStyles = {
    cursor: 'pointer',
    fontWeight: 'bold'
  }
  return (
    <div className="rating" style={containerStyle}>
      <ion-icon name="star-outline"></ion-icon>
      <p style={starRatingStyles}>{starRating}</p>
      <p style={totalReviewStyles}>({totalReviews})</p>
    </div>
  )
}

export default Rating;