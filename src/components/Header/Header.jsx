import React, { useState } from 'react';
//import data with a call
import Description from './Description.jsx';
import Rating from './Rating.jsx';
import Location from './Location.jsx';
import Buttons from './Buttons.jsx';

const Header = () => {
  const [data, setData] = useState({});
  let containerStyle = {
    display: 'flex',
    flexDirection: 'column',
  };
  let homeStyle = {
    display: 'flex'
  }
  return (
    <div style={containerStyle}>
      <Description description="beautiful home" />
      <div style={homeStyle}>
        <Rating starRating="4.95" totalReviews="69" />
        <Location location="RSM, CA United States" />
        <Buttons />
      </div>

    </div>
  )
}

export default Header