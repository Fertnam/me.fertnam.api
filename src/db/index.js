const mysql = require('mysql2')
const config = require('./config')

module.exports = mysql.createPool(config).promise()
