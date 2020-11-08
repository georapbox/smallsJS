'use strict';

/**
 * Checks if 'value' is array.
 *
 * @param {*} value The value to check if is array.
 * @return {Boolean} True if array, else false.
 * @example
 *
 * isArray(['a', 'b', 'c', 'd']);
 * // -> true
 *
 * isArray(100);
 * // -> false
 *
 * isArray('Lorem ipsum dolor sit amet');
 * // -> false
 *
 * isArray({ a: 'a', b: 'b' });
 * // -> false
 */
function isArray(value) {
  return Array.isArray
    ? Array.isArray(value)
    : Object.prototype.toString.call(value) === '[object Array]';
}

module.exports = isArray;
