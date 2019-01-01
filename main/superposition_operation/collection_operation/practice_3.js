'use strict';

function hybrid_operation_to_uneven(collection) {
  let result = 0;
  collection.forEach(e => {
    if (e % 2) {
      result += (e * 3 + 5);
    }
  });
  return result;
}

module.exports = hybrid_operation_to_uneven;
