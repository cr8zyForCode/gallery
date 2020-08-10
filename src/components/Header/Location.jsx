import React from 'react';

const Location = ({ location }) => {
  let styles = {
    // textDecoration: 'underline',
    borderBottom: '1px solid #717171',
    cursor: 'pointer',
    color: '#717171',
    paddingLeft: '4px'
  }
  return (
    <div className="location" style={styles}>
      {location}
    </div>
  )
}

export default Location;