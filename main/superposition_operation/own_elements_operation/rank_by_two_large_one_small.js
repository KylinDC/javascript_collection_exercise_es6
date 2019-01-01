'use strict';

function rank_by_two_large_one_small(collection) {
  let sortedArr = collection.sort((a, b) => a >= b ? 1 : -1);
  let specialRankArray = [];
  for (let i = 2; i < collection.length; i += 3) {
    specialRankArray = specialRankArray.concat(sortedArr.slice(i - 1, i + 1));
    specialRankArray.push(sortedArr[i - 2]);
  }
  let differ = collection.length - specialRankArray.length;
  if (differ > 0) {
    return specialRankArray.concat(sortedArr.slice(-differ));
  } else {
    return specialRankArray;
  }
}

module.exports = rank_by_two_large_one_small;
