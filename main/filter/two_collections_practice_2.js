'use strict';

function choose_no_common_elements(collection_a, collection_b) {
  return collection_a.filter(e => !(collection_b.includes(e)));
}

module.exports = choose_no_common_elements;
