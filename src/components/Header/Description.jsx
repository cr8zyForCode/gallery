import React from 'react';
//import data with a call

const Description = ({ description }) => {
  let styles = {
    fontSize: '20px',
    fontWeight: 'bold'
  }
  return (
    <div className="description" style={styles}>
      {description}
    </div>
  )
}

export default Description;