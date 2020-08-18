import React from 'react';

import ShareList from './ShareModal/ShareList.jsx';
import CloseBtn from './ShareModal/CloseBtn.jsx';
import styles from './ShareModal.scss';

export default ({ shareHandler }) => {
  return (
    <div className={styles.container}>
      <CloseBtn shareHandler={shareHandler} />
      <p className={styles.text}>Share this<br /> place with<br /> friends and family</p>
      <ShareList />
    </div>
  )
};