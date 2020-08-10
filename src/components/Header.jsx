import React, { useState } from 'react';
//import data with a call
import Description from './Header/Description.jsx';
import Rating from './Header/Rating.jsx';
import Location from './Header/Location.jsx';
import Buttons from './Header/Buttons.jsx';

import styles from './hStyles.scss';

const Header = () => {
  const [data, setData] = useState({});
  let containerS = {
    display: 'flex',
    flexDirection: 'column',
  };
  let ownerS = {
    display: 'flex',
    marginTop: '7px',
    paddingBottom: '15px'
  }
  return (
    <div className="header" style={containerS}>
      <p className={styles.other}>Hello World</p>
      <Description className="description" description="Laguna Beach Home" />
      <div className="text-container" style={ownerS}>
        <Rating className="rating" starRating="4.95" totalReviews="69" />
        <Location className="location" location="Laguna Beach, CA United States" />
        <Buttons className="buttons" />
      </div>
    </div>
  )
}

export default Header