'use strict';
var collection = [1, 3, 5, 98, 67, 453];

function compute_average(collection) {
  return get_sum(collection) / collection.length;
}

function get_sum(arr) {
  return arr.reduce((acc, cur) => acc + cur);
}

module.exports = compute_average;
