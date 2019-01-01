'use strict';

function choose_even(collection) {
  return collection.filter(e => e % 2 === 0);
}

module.exports = choose_even;
