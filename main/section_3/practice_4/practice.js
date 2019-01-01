let countSameElements = require('../../section_2/practice_2/practice');
let creatUpdateCollection = require('../practice_2/practice');

function create_updated_collection(collection_a, object_b) {
  let sameElements = countSameElements(collection_a);
  return creatUpdateCollection(sameElements, object_b);
}

module.exports = create_updated_collection;
