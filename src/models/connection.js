const { Sequelize} = require("sequelize")

require("dotenv").config()
const { USER, PASSWORD, PORT, DATABASE } = process.env


const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {

    host: 'localhost',
    dialect: 'postgres'
});


module.exports = {
    sequelize
}