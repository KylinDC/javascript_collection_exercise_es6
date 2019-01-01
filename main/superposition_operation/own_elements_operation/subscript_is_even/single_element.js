'use strict';
var single_element = function (collection) {
  let oddIndexElement = collection.filter((element, index) => index % 2);
  return oddIndexElement.filter((element, index, array) => array.indexOf(element) === array.lastIndexOf(element));
};

module.exports = single_element;
