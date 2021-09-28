const { Sequelize } = require("sequelize")

require("dotenv").config()
const { DBURI } = process.env


const sequelize = new Sequelize(DBURI, {
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // <<<<<<< YOU NEED THIS
        }
    }
})


module.exports = {
    sequelize
}