'use strict';

function find_last_even(collection) {
  return collection.filter(e => e % 2 === 0).pop();
}

module.exports = find_last_even;
