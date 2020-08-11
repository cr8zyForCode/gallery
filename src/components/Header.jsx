import React, { useState } from 'react';

import Description from './Header/Description.jsx';
import Rating from './Header/Rating.jsx';
import Location from './Header/Location.jsx';
import Buttons from './Header/Buttons.jsx';
import Button from './Header/Button.jsx';

import styles from './Header.scss';

const Header = () => {
  const [data, setData] = useState({});

  let shareIcon = (<ion-icon name="share-outline" />)
  let saveIcon = (<ion-icon name="heart-outline" />)
  return (
    <div className={styles.header}>
      <Description className='description' description="Laguna Beach Home" />
      <div className="text-container" >
        <Rating className="rating" starRating="4.95" totalReviews="69" />
        <Location className="location" location="Laguna Beach, CA United States" />
        <div>
          <Button buttonName="Share" buttonIcon={shareIcon} />
          <Button buttonName="Save" buttonIcon={saveIcon} />

        </div>

      </div>
    </div>
  )
}

export default Header