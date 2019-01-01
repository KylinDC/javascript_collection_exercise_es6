'use strict';
var is_exist_element = function (collection, element) {
  return collection.some((value, index) => value === element && index % 2 === 0);
};
module.exports = is_exist_element;
