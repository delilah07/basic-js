const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let newNumArr = [];
  for (let i = 0; i < String(n).length; i++) {
    const changedNumArr = String(n).split("");
    changedNumArr.splice(i, 1);
    const newNum = +changedNumArr.join("");
    newNumArr.push(newNum);
  }
  newNumArr.sort((a, b) => a - b);
  return newNumArr[newNumArr.length - 1];
}

module.exports = {
  deleteDigit,
};
