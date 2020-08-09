import React from 'react';
//import data with a call

const Location = ({ location }) => {
  let styles = {
    fontSize: '14px',
    color: 'rgb(113, 113, 113)',
    textDecoration: 'underline',
    cursor: 'pointer'
  }
  return (
    <div className="location" style={styles}>
      {location}
    </div>
  )
}

export default Location;