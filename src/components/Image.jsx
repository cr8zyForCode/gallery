import React from 'react';

import styles from './Image.scss';

export default ({ image, w, h, size = 'small' }) => {
  return (
    <img src={image} className={styles[size]} width={w} height={h} ></img>
  )
}
