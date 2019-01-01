'use strict';

function get_intersection(collection_a, collection_b) {
  return collection_b.filter(e => collection_a.includes(e));
}

module.exports = get_intersection;
