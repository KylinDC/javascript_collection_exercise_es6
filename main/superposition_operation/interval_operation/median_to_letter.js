'use strict';

function median_to_letter(collection) {
  let median = compute_median(collection);
  return dec_to_letter(Math.ceil(median));
}

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

function dec_to_letter(num) {
  const DICT = 'abcdefghijklmnopqrstuvwxyz';
  if (num <= 26) {
    return DICT[num - 1]
  } else {
    return dec_to_letter(Math.floor((num - 1) / 26)) + DICT[((num - 1) % 26)];
  }
}

module.exports = median_to_letter;
