'use strict';

function find(array, predicate, opt_this) {
  if (Array.prototype.find) {
    return array.find(predicate, opt_this);
  }

  // copied from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
  if (array === null) {
    throw new TypeError('find called on null or undefined');
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
      return value;
    }
  }
  return undefined;
};

module.exports = find;
