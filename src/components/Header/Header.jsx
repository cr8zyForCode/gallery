import React, { useState } from 'react';
//import data with a call
import Description from './Description.jsx';
import Rating from './Rating.jsx';

const Header = () => {
  const [data, setData] = useState({})
  return (
    <div>
      <Description description="beautiful home" />
      <Rating starRating="4.95" totalReviews="69" />
    </div>
  )
}

export default Header