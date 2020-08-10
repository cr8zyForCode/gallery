import React from 'react';

const LargeImage = ({ imageUrl }) => {
  return (
    <img src={imageUrl} className="largeImage" width="560" height="300" />
  )
}

export default LargeImage;