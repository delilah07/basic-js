const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      if (arr[i + 1]) {
        arr.splice(i + 1, 1);
      }
    } else if (arr[i] === "--discard-prev") {
      if (newArr.length > 0) {
        // newArr.pop();
        if (arr[i - 1] === newArr[newArr.length - 1]) {
          newArr.pop();
        }
      }
    } else if (arr[i] === "--double-next") {
      if (arr[i + 1]) {
        newArr.push(arr[i + 1]);
      }
    } else if (arr[i] === "--double-prev") {
      if (arr[i - 1]) {
        newArr.push(arr[i - 1]);
      }
    } else if (arr[i]) {
      newArr.push(arr[i]);
    }
  }
  for (let j = 0; j < newArr.length; j++) {
    switch (newArr[j]) {
      case "--discard-next":
        newArr.splice(j, 1);
        break;
      case "--discard-prev":
        newArr.splice(j, 1);
        break;
      case "--double-next":
        newArr.splice(j, 1);
        break;
      case "--double-prev":
        newArr.splice(j, 1);
        break;
    }
  }
  return newArr;
}

module.exports = {
  transform,
};
