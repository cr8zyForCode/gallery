import React from 'react';

const LargeImage = ({ imageUrl }) => {
  return (
    <div >
      <img src={imageUrl} className="largeImage" width="560" height="300" />
    </div>
  )
}

export default LargeImage;