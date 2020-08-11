import React, { useState } from 'react';
//import data with a call
import Description from './Header/Description.jsx';
import Rating from './Header/Rating.jsx';
import Location from './Header/Location.jsx';
import Buttons from './Header/Buttons.jsx';

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
    <div className="header" style={containerStyle}>
      <Description className="description" description="beautiful home" />
      <div className="text-container" style={homeStyle}>
        <Rating className="rating" starRating="4.95" totalReviews="69" />
        <Location className="location" location="RSM, CA United States" />
        <Buttons className="buttons" />
      </div>
      <p id="hello">hello world</p>

    </div>
  )
}

export default Header