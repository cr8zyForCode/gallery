import React, { useState } from 'react';
//import data with a call
import Description from './Description.jsx';
import Rating from './Rating.jsx';
import Location from './Location.jsx';
import Buttons from './Buttons.jsx';

const Header = () => {
  const [data, setData] = useState({})
  return (
    <div>
      <Description description="beautiful home" />
      <div>
        <Rating starRating="4.95" totalReviews="69" />
        <Location location="RSM, CA United States" />
        <Buttons />
      </div>

    </div>
  )
}

export default Header