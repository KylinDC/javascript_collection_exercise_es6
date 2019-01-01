'use strict';

function average_uneven(collection) {
  let odd = collection.filter(e => e % 2);
  return odd.reduce((acc, cur) => acc + cur) / odd.length;
}

module.exports = average_uneven;
