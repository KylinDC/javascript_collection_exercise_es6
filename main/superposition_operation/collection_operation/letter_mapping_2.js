'use strict';

function average_to_letter(collection) {
  let sum = collection.reduce((acc, cur) => acc + cur);
  return dec_to_letter(Math.ceil(sum / collection.length));
}

function dec_to_letter(num) {
  const DICT = 'abcdefghijklmnopqrstuvwxyz';
  if (num <= 26) {
    return DICT[num - 1]
  } else {
    return dec_to_letter(Math.floor((num - 1) / 26)) + DICT[((num - 1) % 26)];
  }
}

module.exports = average_to_letter;
