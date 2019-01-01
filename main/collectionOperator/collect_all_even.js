'use strict';

function collect_all_even(collection) {
  return collection.filter(e => e % 2 === 0);
}

module.exports = collect_all_even;
