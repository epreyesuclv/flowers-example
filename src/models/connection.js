const { Sequelize} = require("sequelize")

require("dotenv").config()
const { USER, PASSWORD, PORT, DATABASE ,HOST} = process.env


const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {

    host: HOST,
    dialect: 'postgres'
});


module.exports = {
    sequelize
}