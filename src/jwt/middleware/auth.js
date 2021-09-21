const { create, findOne } = require("../config/authQuerys")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { InputRequire, IncorrectCredentials, DuplicateEmail } = require("../../Errors/MyErrors")
const { cleanLogin, cleanRegister } = require("../authentication/cleanAuth")


async function register(req, res) {
    try {

        console.log("request", req)
        const { firstName, lastName, email, password } = req.body
        try {
            const user = cleanRegister(firstName, lastName, email, password)

        } catch (IncorrectCredentialError) {
            res.status(401).send("somthing was wrong with your credentials")
            //todo
        }
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
    }
}

async function login(req, res) {
    try {
        const { email, password } = req.body

        user = cleanLogin(email, password)
        return user
    } catch (err) {
        //todo
    }

}




module.exports = {
    register,
    login
}