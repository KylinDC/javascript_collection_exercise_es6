'use strict';

function get_letter_interval(number_a, number_b) {
  let integer_interval = get_integer_interval(number_a, number_b);
  return integer_interval.map(e => dec_to_letter(e));
}

function dec_to_letter(num) {
  const DICT = 'abcdefghijklmnopqrstuvwxyz';
  if (num <= 26) {
    return DICT[num - 1]
  } else {
    return dec_to_letter(Math.floor((num - 1) / 26)) + DICT[((num - 1) % 26)];
  }
}

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

module.exports = get_letter_interval;
