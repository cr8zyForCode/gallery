import React, { useState } from 'react';

import styles from './Button.scss';

export default ({ buttonName }) => {
  let [background, setBackground] = useState(styles.container);
  let [heartColor, setHearColor] = useState(styles.save);

  let onMouseEnterHandler = (e) => {
    setBackground(styles.hover);
  };

  let onMouseLeaveHandler = (e) => {
    setBackground(styles.container);
  };

  let clickHandler = (e) => {
    if (buttonName === 'Save') {
      if (heartColor === styles.save) {
        setHearColor(styles['save-filled'])
      } else {
        setHearColor(styles.save)
      }
    }
  }

  let shareIcon = (<svg aria-hidden="true" role="presentation" focusable="false" viewBox="0 0 32 32" className={styles.share}><g vectorEffect="non-scaling-stroke" transform="translate(0,0)scale(1,1)" fill="none" fillRule="evenodd" stroke="#000" strokeWidth="2"><path d="m27 18v9c0 1.1045695-.8954305 2-2 2h-18c-1.1045695 0-2-.8954305-2-2v-9"></path><path d="m4.5 14.5h23z" transform="matrix(0 1 -1 0 30.5 -1.5)"></path><path d="m6 13 9.2928932-9.29289322c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l9.2928932 9.29289322"></path></g></svg>)

  let saveIcon = (<svg aria-hidden="true" focusable="false" viewBox="0 0 32 32" className={heartColor}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z"></path></svg>)

  return (
    <div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler} className={background} onClick={clickHandler}>
      {(buttonName === 'Save') ? saveIcon : shareIcon}
      <p className={styles.buttonName}>{buttonName}</p>
    </div>
  )
}
