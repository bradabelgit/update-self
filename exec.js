const child_process = require("child_process");
const util = require("util");

module.exports = util.promisify(child_process.exec);
