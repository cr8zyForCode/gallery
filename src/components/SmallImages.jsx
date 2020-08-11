import React from 'react';

import Image from './SmallImages/Image.jsx'
//images should be an array
const SmallImages = ({ images }) => {

  return (
    <div>
      <Image />
      <Image />
      <Image />
      <Image />
    </div>
  )
}

export default SmallImages;