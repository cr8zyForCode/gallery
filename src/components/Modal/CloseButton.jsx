import React, { useState } from 'react';

import styles from './CloseButton.scss';


export default ({ showImages }) => {

  let clickHanlder = () => {
    console.log('ive been clicked from the modal')
    showImages()
  }

  let svgIcon = (<svg role="presentation" aria-hidden="true" focusable="false" className={styles.svg}><path d="m11.5 10.5c.3.3.3.8 0 1.1s-.8.3-1.1 0l-4.4-4.5-4.5 4.5c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l4.5-4.5-4.4-4.5c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0l4.4 4.5 4.5-4.5c.3-.3.8-.3 1.1 0s .3.8 0 1.1l-4.5 4.5z" ></path></svg>)

  return (
    <div onClick={clickHanlder} className={styles.container}>
      {svgIcon}
      <span className={styles.text}>Close</span>
    </div>
  )
}