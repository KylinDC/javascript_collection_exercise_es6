'use strict';
var calculate_median = function (collection) {
  let oddIndexElement = collection.filter((e, i) => i % 2);
  return compute_median(oddIndexElement);
};

function compute_median(collection) {
  let sorted_arr = collection.sort(asc_sort);
  let median_left = sorted_arr[Math.floor(collection.length / 2)];
  let median_right = sorted_arr[Math.ceil(collection.length / 2) - 1];
  return (get_average(median_left, median_right));
}

function asc_sort(a, b) {
  return a > b ? 1 : -1;
}

function get_average() {
  let arguments_arr = Array.from(arguments)
  let sum = arguments_arr.reduce((acc, cur) => acc + cur);
  return sum / arguments_arr.length;
}
module.exports = calculate_median;
