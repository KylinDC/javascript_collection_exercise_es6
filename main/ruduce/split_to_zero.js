'use strict';

function spilt_to_zero(number, interval) {
  let result = [];
  for (let i = number; i > -interval; i -= interval) {
    i = parseFloat(i.toFixed(1));
    result.push(i);
  }
  return result;
}

module.exports = spilt_to_zero;
