let getSameElementsCount = require('../practice_2/practice');

function count_same_elements(collection) {
  let sameElementsCount = getSameElementsCount(collection);
  for (let i of sameElementsCount) {
    i = replaceName(i, 'key', 'name');
    delete i['key'];
    i = replaceName(i, 'count', 'summary');
    delete i['count'];
  }
  return sameElementsCount;
}

function replaceName(obj, name1, name2) {
  obj[name2] = obj[name1];
  return obj;
}

module.exports = count_same_elements;
