let client = require('../../db/index.js');

module.exports = {
  getProperty: (property, cb) => {
    let query = `SELECT * FROM gallery.properties WHERE id = ${property}`;

    client.execute(query, (err, result) => {
      if (err) {
        console.log('could not get reservations');
        cb(err)
      } else {
        // console.log('got the data', resu);
        cb(null, result)
      }
    });
  },

  getImages: (property, cb) => {
    let query = `SELECT * FROM gallery.images_by_property WHERE property_id = ${property}`;

    client.execute(query, (err, result) => {
      if (err) {
        console.log('could not get images');
        cb(err)
      } else {
        // console.log('got the data', resu);
        cb(null, result)
      }
    });
  }

}

