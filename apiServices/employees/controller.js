const { db } = require('../../config')
const Sequelizelib = require('../../lib/sequelize')
const {newUsers, getUsers, updateUsers} = require('./service')

const sequelize = new Sequelizelib()

