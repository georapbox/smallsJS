'use strict';

/**
 * Transforms a function of N arguments in such a way that it can
 * be called as a chain of N functions each with a single argument (arity: 1).
 *
 * @param {function} func The initial function to be curried.
 * @param {Number} [arity=func.length] The arity of the provided function.
 * Useful in cases that arity cannot be determined by `func.length`.
 * As of ES2015 when a function has a rest parameter or at least one
 * parameter with default value, the `func.length` is not properly calculated.
 * @throws {TypeError} Throws if `func` is not a function.
 * @throws {TypeError} Throws if `arity` is not a number but not undefined.
 * @returns {function} A curried equivalent of the provided function.
 * @example
 *
 * const add = curry((a, b) => a + b);
 * const addOne = add(1);
 * addOne(2); // => 3
 *
 * // Provide arity as second argument in cases that it cannot be determined.
 * const add = curry((a = 0, ...args) => a + args[0] + args[1], 3);
 * const addOne = add(1);
 * const addTwo = addOne(2);
 * addTwo(3); // => 6
 */
const curry = (func, arity) => {
  if (typeof func !== 'function') {
    throw new TypeError('Expected a function for first argument');
  }

  if (typeof arity !== 'undefined' && typeof arity !== 'number') {
    throw new TypeError('Expected a number for second argument');
  }

  return function curried(...args_a) {
    return args_a.length >= (arity || func.length)
      ? func(...args_a)
      : (...args_b) => curried(...args_a, ...args_b);
  };
};

module.exports = curry;
