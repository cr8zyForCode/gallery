import React from 'react';

import SharePlatform from './SharePlatform.jsx';
import styles from './ShareList.scss';

export default () => {
  let sharePlatforms = ['Facebook', 'Twitter', 'Copy Link', 'Email', 'SMS', 'Messenger', 'WhatsApp', 'Embed'];
  return (
    <div className={styles.container}>
      {sharePlatforms.map((platform, index) => {
        return (<SharePlatform platform={platform} id={platform.toString()} index={index} />)
      })}
    </div>
  )
};