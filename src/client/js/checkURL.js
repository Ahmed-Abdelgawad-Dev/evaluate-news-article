// https://www.npmjs.com/package/valid-url
const validUrl = require('valid-url');
const checkURL = (url) => Boolean(validUrl.isWebUri(`${url}`));
module.exports = {checkURL};