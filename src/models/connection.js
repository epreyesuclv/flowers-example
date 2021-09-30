const { response } = require("express")
const { request } = require("express")
const { Sequelize } = require("sequelize")

require("dotenv").config()
const { DBURI } = process.env

const sequelize = function () {
    try {
        const sequelize = new Sequelize('auth', 'postgres', '1234', {
            dialect: 'postgres'
        })
        return sequelize
    } catch (err) {
        console.log(err)
    }

}()


module.exports = {
    sequelize
}