
const { Sequelize } = require("sequelize")

require("dotenv").config()
const { DATABASE_URL, DBURI } = process.env

const sequelize = function () {
    try {
        const sequelize = new Sequelize(DATABASE_URL || DBURI, {
            dialectOptions: {
                ssl: {
                    require: true,
                    rejectUnauthorized: false // <<<<<<< YOU NEED THIS
                }
            }

        })
        return sequelize
    } catch (err) {
        console.log(err)
    }

}()


module.exports = {
    sequelize
}