import React, { useState } from 'react';

import styles from './Button.scss';

export default ({ buttonName, buttonIcon }) => {
  let [background, setBackground] = useState(styles.container)

  let onMouseEnterHandler = (e) => {
    console.log('im in')
    setBackground(styles['container-hov'])
  };

  let onMouseLeaveHandler = (e) => {
    console.log('im out')
    setBackground(styles['container'])
  };

  return (
    <div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className={background}>
      {buttonIcon}
      <p className={styles.buttonName}>{buttonName}</p>
    </div>
  )
}
