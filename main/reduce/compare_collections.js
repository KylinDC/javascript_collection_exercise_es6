'use strict';

function compare_collections(collection_a, collection_b) {
  return collection_a.every((element, index) => collection_b[index] === element);
}

module.exports = compare_collections;
