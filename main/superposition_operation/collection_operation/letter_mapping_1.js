'use strict';

function even_to_letter(collection) {
  let result = [];
  collection.forEach(e => {
    if (e % 2 === 0) {
      result.push(dec_to_letter(e));
    }
  })
  return result;
}

function dec_to_letter(num) {
  const DICT = 'abcdefghijklmnopqrstuvwxyz';
  if (num <= 26) {
    return DICT[num - 1]
  } else {
    return dec_to_letter(Math.floor((num - 1) / 26)) + DICT[((num - 1) % 26)];
  }
}


module.exports = even_to_letter;
