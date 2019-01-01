'use strict';
var calculate_average = function (collection) {
  let oddIndexElement = collection.filter((e, i) => i % 2);
  return get_average(oddIndexElement);
};

function get_average(arr) {
  let sum = arr.reduce((acc, cur) => acc + cur);
  return sum / arr.length;
}

module.exports = calculate_average;
