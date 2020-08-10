import React from 'react';
//import data with a call

const Rating = ({ starRating, totalReviews }) => {
  let containerStyle = {
    display: 'flex',
  };
  let starStyle = {
    color: '#ff385c'
  };
  let totalReviewStyles = {
    cursor: 'pointer',
    color: '#717171',
    paddingLeft: '4px'
  };
  let starRatingStyles = {
    cursor: 'pointer',
    paddingLeft: '4px'
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