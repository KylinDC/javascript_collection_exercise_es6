'use strict';

function get_integer_interval(number_a, number_b) {
  if (number_a <= number_b) {
    return get_integer(number_a, number_b);
  } else {
    return get_integer(number_b, number_a).reverse();
  }
}

function get_integer(number_a, number_b) {
  let integer_arr = [];
  for (let i = number_a; i <= number_b; i++) {
    integer_arr.push(i);
  }
  return integer_arr;
}

module.exports = get_integer_interval;
