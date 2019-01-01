'use strict';

function get_union(collection_a, collection_b) {
  return collection_a.concat(collection_b.filter(e => !collection_a.includes(e)));
}

module.exports = get_union;
