const { Sequelize } = require("sequelize")

require("dotenv").config()
const {  DBURI } = process.env


const sequelize = new Sequelize(DBURI)


module.exports = {
    sequelize
}