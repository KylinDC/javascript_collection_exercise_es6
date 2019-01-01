'use strict';
var number_map_to_word = function (collection) {
  return collection.map(e => decToLetter(e));
};

function decToLetter(num) {
  const DICT = 'abcdefghijklmnopqrstuvwxyz';
  if (num <= 26) {
    return DICT[num - 1];
  } else {
    return decToLetter(Math.round((num - 1) / 26)) + DICT[(num - 1) % 26];
  }
}

module.exports = number_map_to_word;
