'use strict';
var rank_asc = function (collection) {
  return collection.sort(asc_sort);
};

function asc_sort(a, b) {
  return a > b ? -1 : 1;
}

module.exports = rank_asc;
