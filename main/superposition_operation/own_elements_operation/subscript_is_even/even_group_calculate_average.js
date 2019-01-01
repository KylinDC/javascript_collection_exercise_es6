'use strict';

var even_group_calculate_average = function (collection) {
  let oddIndexArray = collection.filter((element, index) => index % 2);
  let evenArray = oddIndexArray.filter(element => (element % 2 === 0));
  if (evenArray.length === 0) {
    return [0];
  }

  let evenCountObject = {};
  for (let i of evenArray) {
    let stringI = i.toString();
    if (evenCountObject[stringI.length]) {
      evenCountObject[stringI.length].push(i);
    } else {
      evenCountObject[stringI.length] = [i];
    }
  }

  let averageArray = [];
  for (let i in evenCountObject) {
    let average = getAverage(evenCountObject[i]);
    averageArray.push(average);
  }
  return averageArray.sort((a, b) => a >= b ? 1 : -1);
}

function getAverage(arr) {
  let sum = arr.reduce((acc, cur) => acc += cur, 0);
  return sum / arr.length;
}

module.exports = even_group_calculate_average;
