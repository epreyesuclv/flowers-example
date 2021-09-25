
const { MONGO_URI, USER, PASSWORD, PORT, DATABASE } = process.env

<<<<<<< HEAD
const { Sequelize } = require("sequelize")
const sequelize = new Sequelize("auth", "postgres", "1234", {
=======

const sequelize = new Sequelize(DATABASE, USER, PASSWORD, {
>>>>>>> end users querys and flowers querys
    host: 'localhost',
    dialect: 'postgres'
});


module.exports = {
    sequelize
}