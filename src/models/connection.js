const { response } = require("express")
const { request } = require("express")
const { Sequelize } = require("sequelize")

require("dotenv").config()
const { DBURI } = process.env

const sequelize = function() {
    try {
        const sequelize = new Sequelize(DBURI, {
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