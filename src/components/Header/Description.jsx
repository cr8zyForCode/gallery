import React from 'react';
import styles from './Description.scss';

export default ({ description }) => {
  return (
    <p className={styles.description}>{description}</p>
  )
};
