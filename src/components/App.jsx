import React from 'react';

import Header from './Header.jsx';
import LargeImage from './LargeImage.jsx';

const App = () => {
  let styles = {
    padding: '0',
    margin: '0'
  }
  let imageUrl = "https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard1.jpeg"
  return (
    <div styles={styles}>
      <Header />
      <LargeImage imageUrl={imageUrl} />
    </div >
  )
}

export default App;
