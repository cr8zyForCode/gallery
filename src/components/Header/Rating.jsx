import React from 'react';
//import data with a call

const Rating = ({ starRating, totalReviews }) => {
  let containerStyle = {
    display: 'flex',
    fontSize: '14px'
  };
  let starStyle = {
    color: 'red'
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
      <ion-icon name="star" style={starStyle} />
      <p style={starRatingStyles}>{starRating}</p>
      <p style={totalReviewStyles}>({totalReviews})</p>
    </div>
  )
}

export default Rating;