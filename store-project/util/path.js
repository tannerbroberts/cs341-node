// Just a little function that gets the root node directory

const path = require('path');

module.exports = path.dirname(process.mainModule.filename);