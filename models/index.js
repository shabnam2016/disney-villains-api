const Sequelize = require('sequelize')
const villainsModel = require('./villains')// return function defination to read data

const connection = new Sequelize('disney', 'admin', 'asdiop', { // {database,user,password)}
  host: 'localhost', dialect: 'mysql'
})

const villains = villainsModel(connection, Sequelize)// call function to connect & read data from database

module.exports = { villains }
