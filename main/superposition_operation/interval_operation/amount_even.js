'use strict';

function amount_even(collection) {
  let result = 0;
  collection.forEach(e => {
    if (e % 2 === 0) {
      result += e;
    }
  });
  return result;
}

module.exports = amount_even;
