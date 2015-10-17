'use strict';

function findIndex(array, predicate, opt_this) {
  if (Array.prototype.findIndex) {
    return array.findIndex(predicate, opt_this);
  }

  // copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
  if (this === null) {
    throw new TypeError('Array.prototype.findIndex called on null or undefined');
  }
  if (typeof predicate !== 'function') {
    throw new TypeError('predicate must be a function');
  }
  var list = Object(array);
  var length = list.length >>> 0;
  var thisArg = opt_this;
  var value;

  for (var i = 0; i < length; i++) {
    value = list[i];
    if (predicate.call(thisArg, value, i, list)) {
          return i;
    }
  }
  return -1;
};

module.exports = findIndex;
