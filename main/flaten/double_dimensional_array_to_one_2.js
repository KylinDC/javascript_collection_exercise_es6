'use strict';

function double_to_one(collection) {
  return getUniqueElement(flattenArr(collection));
}

function flattenArr(arr) {
  return arr.reduce((acc, cur) => acc.concat(Array.isArray(cur) ? flattenArr(cur) : cur), []);
}


function getUniqueElement(arr) {
  return Array.from(new Set(arr));
}

module.exports = double_to_one;
