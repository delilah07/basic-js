const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  let sum = 0;
  matrix.forEach((arr, row) => {
    for (let i = 0; i < arr.length; i++) {
      const plusNum =
        row === 0 || matrix[row - 1][i] !== 0 ? matrix[row][i] : 0;
      console.log(matrix[row][i], plusNum);
      sum += plusNum;
    }
  });
  return sum;
}

module.exports = {
  getMatrixElementsSum,
};
