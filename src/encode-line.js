const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let num = 1;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      console.log(str, i);
      num += 1;
    } else {
      console.log(num);
      num === 1 ? (result += str[i]) : (result += num + str[i]);
      num = 1;
    }
  }

  return result;
}

module.exports = {
  encodeLine,
};
