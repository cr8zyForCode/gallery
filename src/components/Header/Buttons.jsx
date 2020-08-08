import React, { useState } from 'react';
//import data with a call

const Buttons = () => {
  const [heartFill, setHeartFiller] = useState(false);
  let containerStyle = {
    display: 'flex',
    flex: '8',
    justifyContent: 'flex-end'
  }

  let filledHeartStyle = {
    color: 'red'
  }

  let buttonStyle = {
    display: 'flex',
    cursor: 'pointer',
    backgroundColor: "rgb(113, 113, 113)"
  }

  let clickHandler = (e) => {
    setHeartFiller(!heartFill)
  }

  let outlinedHeart = (<ion-icon name="heart-outline" onClick={clickHandler} />);
  let filledHeart = (<ion-icon name="heart" onClick={clickHandler} style={filledHeartStyle} />)

  return (
    <div className="description" style={containerStyle}>
      <div style={buttonStyle}>
        <ion-icon name="share-outline"></ion-icon>
        <p>Share</p>
      </div>
      <div style={buttonStyle}>
        {!heartFill ? outlinedHeart : filledHeart}
        <p> Save</p>
      </div>
    </div >
  )
}

export default Buttons;