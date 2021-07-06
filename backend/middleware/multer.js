//Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files
//HD Storage
const multer = require('multer');
// set storage
var storage = multer.memoryStorage()

module.exports = store = multer({ storage : storage })