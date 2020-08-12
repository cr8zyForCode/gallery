let { Property } = require('../../db/models/Property');

const getProperties = (_id, callback) => {
  Property.find({ _id: _id }, (err, document) => {
    if (err) {
      console.log('err', err);
    } else {
      callback(null, document);
    }
  });
};

exports.getProperties = getProperties;