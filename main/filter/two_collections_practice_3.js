'use strict';

function choose_divisible_integer(collection_a, collection_b) {
  return collection_a.filter(e => is_divisible(e, collection_b));
}

function is_divisible(num, arr) {
  return arr.some(e => num % e === 0);
}

module.exports = choose_divisible_integer;
