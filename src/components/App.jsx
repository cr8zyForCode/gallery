import React from 'react';

import Header from './Header.jsx';
import LargeImage from './LargeImage.jsx';


const App = () => {
  let styles = {
    marginLeft: '25px',
    marginRight: '25px',
  }
  let imageUrl = "https://airbnb-hr-replica.s3-us-west-1.amazonaws.com/fec-data-backyard/backyard1.jpeg"
  return (
    <div className={styles.sample}>
      <Header />
      <LargeImage imageUrl={imageUrl} />
    </div >
  )
}

export default App;
