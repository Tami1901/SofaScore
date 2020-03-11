module.exports = {
  /**
   * Returns an empty object without prototype. There is object creation type that creates object without prototype
   */
  createPrototypelessObject() {
    let objekt = {};
    objekt.__proto__ = null;
    return objekt;
  },

  /**
   * Returns an object with prototype set to given `proto`.
   * @param {Object} proto Prototype object
   */
  createObjectWithPrototype(proto) {
    let objekt = {};
    objekt.__proto__ = proto;
    return objekt;
  },

  /**
   * Returns an object with `value` property set to the given `value` and `getValue` method.
   * Be careful, if `value` changes, `getValue` should return changed `value`.
   * @param {any} value
   */
  createObjectWithMethod(value) {
    let objekt = {
      value: value,
      getValue() {
        return this.value;
      }
    };
    return objekt;
  },

  /**
   * Returns an object with the `getValue` and `setValue` methods, having `value` hidden from the outside.
   */
  createEncapsulatedObject() {
    return (() => {
      let value = undefined;

      return {
        getValue() {
          return value;
        },
        setValue(val) {
          value = val;
        }
      };
    })();
  },

  /**
   * Returns the shallow copy of the given `obj`. HINT: This **operator** will be used later.
   * @param {Object} obj
   */
  shallowCopy(obj) {
    return { ...obj };
  },

  /**
   * Returns the deep copy of the given `obj`.
   * @param {Object} obj
   */
  deepCopy(obj) {
    return JSON.parse(JSON.stringify(obj));
  },

  /**
   * Returns an array containing 2 elements which are
   * loosely equal, but strictly unequal.
   */
  looselyTrue() {
    return [0, []];
  },

  /**
   * Returns a string that is loosely equal to boolean `true`. This one is tricky :)
   */
  stringLooselyEqualToTrue() {
    return "1";
  },

  /**
   * Returns correct sum of a and b.
   */
  safeSum(a, b) {
    return parseInt(a) + parseInt(b);
  },

  /**
   * Returns formatted string for the given date.
   * Format should be `{day}-{month}-{fullYear}` (all numbers).
   * @param {Date} date
   */
  formatDate(date) {
    return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  },

  /**
   * Sorts the given `numberArray` in ascending order.
   * Use array `.sort` method. Sort is done in place so there is no need to return anything.
   * @param {number[]} numberArray
   */
  sortNumberArray(numberArray) {
    numberArray.sort((a, b) => a - b);
  },

  /**
   * Multiplies all the elements in the array by 2 _in place_
   * (edits the given array) and returns it.
   * @param {number[]} numberArray
   */
  multiplyArrayByTwo(numberArray) {
    for (let i = 0; i < numberArray.length; i++) {
      numberArray[i] *= 2;
    }
    return numberArray;
  },

  /**
   * Multiplies all the elements in the array by 2 and returns them
   * in a new array.
   * @param numberArray
   */
  multiplyArrayByTwoNew(numberArray) {
    result = numberArray.map(item => item * 2);
    return result;
  },

  /**
   * Create two classes: `Person` and `Programmer`. `Programmer` class extends `Person`.
   * Person class has `name` property (set via constructor) and `getName` method (calls `callGetName` with name`).
   * Programmer class has `language` property provided to constructor (and `name` inherited from `Person`) and `getLanguage` method (calls `callGetLanguage` with `language`)
   * Return object with created classes, `return { Person, Programmer }`.
   *
   * NOTE: class methods should use `bind`, function expression syntax won't work here because code isn't transpiled.
   *
   * @param {Function} callGetName
   * @param {Function} callGetLanguage
   */

  classInheritance(callGetName, callGetLanguage) {
    class Person {
      constructor(name) {
        this.name = name;
      }
      getName() {
        callGetName(this.name);
      }
    }
    class Programmer extends Person {
      constructor(name, language) {
        super(name);
        this.language = language;
      }
      getLanguage() {
        callGetLanguage(this.language);
      }
    }
    return { Person, Programmer };
  },

  /**
   * EXTRA CREDIT TASK -> Closure trick with async. Async is not important here and has nothing to do with the solution.
   *
   * **This is variant of probably most common "big firm" interview question with closures.**
   *
   * This task has more easier solutions (e.g. using `let` instead of `var`), but desired solutions included Closures.
   *
   * Call the `consumer` function once every second three times giving it loop iterator as argument.
   * Use the provided for loop, do not change for loop, but feel free to modify setTimeout.
   * @param {Function} consumer
   */
  timeoutIncrement(consumer) {
    for (var i = 1; i <= 3; i += 1) {
      (a =>
        setTimeout(() => {
          consumer(a);
          /* your function goes here, or instead of this function */
        }, 1000))(i);
    }
  }
};
