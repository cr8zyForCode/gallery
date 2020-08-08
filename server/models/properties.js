let Property = require('../../db/models/Property');

const getProperties = (callback) => {
  Property.find({}, (err, docs) => {
    if (err) {
      console.log('err', err);
    } else {
      console.log(docs);
      callback(null, docs);
    }
  });
};

exports.getProperties = getProperties;