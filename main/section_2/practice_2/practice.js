let getSameElementsCount = require('../practice_1/practice');

function count_same_elements(collection) {
  let longStringArray = [];
  for (let i = 0; i < collection.length; i++) {
    if (collection[i].length >= 3) {
      longStringArray.push(collection[i]);
      collection.splice(i, 1, collection[i][0]);
    }
  }
  for (let i of longStringArray) {
    collection = collection.concat(getfilledArray(i));
  }
  return getSameElementsCount(collection);
}

function getfilledArray(str) {
  let filledArray = [];
  let strValue = str[0];
  let strNumber = parseInt(str.slice(2));
  for (let i = 0; i < strNumber - 1; i++) {
    filledArray.push(strValue);
  }
  return filledArray;
}

module.exports = count_same_elements;
