'use strict';
var even_asc_odd_desc = function (collection) {
  let odd_array = collection.filter(x => x % 2);
  let even_array = collection.filter(x => !(x % 2));
  let ascend_sort_even_array = even_array.sort(ascend_sort);
  let descend_sort_odd_array = odd_array.sort(descend_sort);
  return ascend_sort_even_array.concat(descend_sort_odd_array);
};

function ascend_sort(a, b) {
  return a > b ? 1 : -1;
}

function descend_sort(a, b) {
  return a > b ? -1 : 1;
}
module.exports = even_asc_odd_desc;
