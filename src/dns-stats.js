const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const obj = {};
  for (let i of domains) {
    const formattedDomains = i.split(".").reverse();
    formattedDomains.forEach((el, i) => {
      if (i === 0) {
        const firstLevel = `.${formattedDomains[0]}`;
        obj.hasOwnProperty(firstLevel)
          ? obj[firstLevel]++
          : (obj[firstLevel] = 1);
      } else {
        const longDomain = `.${formattedDomains.slice(0, i + 1).join(".")}`;
        obj.hasOwnProperty(longDomain)
          ? obj[longDomain]++
          : (obj[longDomain] = 1);
      }
    });
    console.log(formattedDomains);
  }
  return obj;
}

module.exports = {
  getDNSStats,
};
