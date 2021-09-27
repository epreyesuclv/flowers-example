
const { MONGO_URI, USER, PASSWORD, PORT, DATABASE } = process.env

const { Sequelize } = require("sequelize")
const sequelize = new Sequelize("auth", "postgres", "1234", {
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = {
    sequelize
}