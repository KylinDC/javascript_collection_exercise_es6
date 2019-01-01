'use strict';

function double_to_one(collection) {
  return collection.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? double_to_one(cur) : cur), []);
}

module.exports = double_to_one;
