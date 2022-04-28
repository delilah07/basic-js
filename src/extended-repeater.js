const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator) {
    options.separator = "+";
  }
  if (!options.repeatTimes) {
    options.repeatTimes = 1;
  }
  if (typeof options.addition == "undefined") {
    options.addition = "";
  } else if (!options.addition) {
    options.addition = String(options.addition);
  }
  if (!options.additionRepeatTimes) {
    options.additionRepeatTimes = 1;
  }
  if (!options.additionSeparator) {
    options.additionSeparator = "|";
  }
  if (!options.separator) {
    options.separator = "";
  }
  let newAddition = [];
  for (let i = 0; i < options.additionRepeatTimes; i++) {
    newAddition.push(String(options.addition));
  }
  let newString = str + newAddition.join(options.additionSeparator);
  let newArrayString = [];
  for (let i = 0; i < options.repeatTimes; i++) {
    newArrayString.push(newString);
  }
  console.log(options.addition);
  return newArrayString.join(options.separator);
}

module.exports = {
  repeater,
};
