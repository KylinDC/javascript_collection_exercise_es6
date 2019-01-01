'use strict';

function hybrid_operation_to_uneven(collection) {
  let result = [];
  collection.forEach(e => {
    if (e % 2) {
      result.push(e * 3 + 2);
    }
  });
  return result;
}

module.exports = hybrid_operation_to_uneven;
