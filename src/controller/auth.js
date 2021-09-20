const { create, findOne } = require("../jwt/model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
const { InputRequire, IncorrectCredentials, DuplicateEmail } = require("../Errors/MyErrors")



async function register(req, res) {
    try {

        console.log("request", req)
        const { firstName, lastName, email, password } = req.body
        try {
            const user = cleanRegister(firstName, lastName, email, password)

            if (user === undefined)
                res.status(400).send("Incorrect credentials")
        } catch (err) {

            //todo
        }
        res.status(200).json(user)
    } catch (err) {
        console.log(err)
    }
}



async function cleanRegister(firstName, lastName, email, password) {

    //veryfiying if the fields are empty
    if (!(email && password && firstName && lastName))
        // res.status(400).send("All input is required")
        throw new InputRequire

    //veryfying if the user already exist

    const oldUser = await findOne(email)
    // console.log(oldUser)
    if (oldUser)
        //return res.status(409).send("user aready exist")
        throw new DuplicateEmail
    //encypting the pass
    encryptedPass = await bcrypt.hash(password, 11)

    //creating token
    const token = getToken(email)

    //creating the user
    const user = await create(
        firstName,
        lastName,
        email.toLowerCase(),
        encryptedPass
    )
    return user

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



function cleanLogin(email, password) {

    if (!(email && password)) {
        throw new InputRequire
    }
    //console.log(email)
    const user = await findOne(email)
    //console.log(user)
    if (user && (await bcrypt.compare(password, user.pass))) {

        token = getToken(user, email)

        user.token = token
        return user
    }
    throw new IncorrectCredentials

}



function getToken(email) {

    const token = jwt.sign(
        {
            user_id: email
        },
        process.env.TOKEN_KEY,
        {
            expiresIn: "2h"
        }
    )
    return token

}


module.exports = {
    register,
    login
}