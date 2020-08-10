import React, { useState } from 'react';
//import data with a call

const Buttons = () => {
  const [heartFill, setHeartFiller] = useState(false);
  const [shareHoverColor, setShareHoverColor] = useState(null);
  const [saveHoverColor, setSaveHoverColor] = useState(null);

  let clickHandler = (e) => {
    setHeartFiller(!heartFill)
  };

  let onMouseEnterHandler = (e) => {
    setHoverColor("#dddddd")
  }

  let onMouseLeaveHandler = (e) => {
    setHoverColor("")
  }

  let outlinedHeart = (<ion-icon name="heart-outline" onClick={clickHandler} />);
  let filledHeart = (<ion-icon name="heart" onClick={clickHandler} style={filledHeartStyle} />);

  let containerStyle = {
    display: 'flex',
    flex: '8',
    justifyContent: 'flex-end'
  };

  let filledHeartStyle = {
    color: 'red'
  };

  // let buttonStyle = {
  //   display: 'flex',
  //   justifyContent: 'space-between',
  //   cursor: 'pointer',
  //   backgroundColor: hoverColor,
  //   padding: '7px',
  // };

  let textStyle = {
    marginLeft: '5px',
    textDecoration: 'underline'
  };

  return (
    <div className="description" style={containerStyle}>
      <div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
        <ion-icon name="share-outline"></ion-icon>
        <p style={textStyle}>Share</p>
      </div>
      <div onMouseEnter={onMouseEnterHandler} onMouseLeave={onMouseLeaveHandler}>
        {!heartFill ? outlinedHeart : filledHeart}
        <p style={textStyle}> Save</p>
      </div>
    </div >
  )
}

export default Buttons;