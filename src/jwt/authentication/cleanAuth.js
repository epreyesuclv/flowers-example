
const { create, findOneBack, findOneFront } = require("../config/authQuerys")

const bcrypt = require("bcryptjs")
const { IncorrectCredentials, InputRequire, DuplicateEmail } = require("../../Errors/MyErrors")
const jwt = require("jsonwebtoken")
require("dotenv").config()


//throw: InputRequireError , IncorrectCredentialError
async function cleanLogin(email, password, busy) {

    if (!(email && password)) {
        throw new InputRequire
    }
    //console.log(email)


    const func = (busy == "back") ? findOneBack : findOneFront

    //veryfying if the user already exist

    const user = await func(email)

    console.log("clean auth ", user)


    if (user === undefined)
        throw new IncorrectCredentials

    //console.log(user)
    if (user && (await bcrypt.compare(password, user.pass))) {
        console.log("cleanAuth - cleanLogin",email)
        const token = getToken( email)

        user.token = token
        //console.log("in cleanAuth",user)
        return user
    }

    throw new IncorrectCredentials



}


//throws : IntputRequireError , DuplicateEmailError , IncorrectCredentialsError
async function cleanRegister(firstName, lastName, email, password, busy, endPoint) {

    //veryfiying if the fields are empty
    if (!(email && password && firstName && lastName))
        // res.status(400).send("All input is required")
        throw new InputRequire

    console.log("cleanAuth-cleanRegister ",busy)
    const func = (busy == "back") ? findOneBack : findOneFront

    //veryfying if the user already exist

    const oldUser = await func(email)
    //console.log("cleanAuth", oldUser?.toJSON() ?? "null")

    if (oldUser)
        //return res.status(409).send("user aready exist")
        throw new DuplicateEmail

    //encypting the pass
    const encryptedPass = await bcrypt.hash(password, 11)

    //creating token
    const token = getToken(email)

    //creating the user

    const user = await create({

 

        firstName: firstName,
        lastName: lastName,
        email: email.toLowerCase(),
        password: encryptedPass,

        endPoint: endPoint

    }
    )

    user.token = token

    return user

}


function getToken(email) {
    console.log("cleanAuth-getToken",email)
    const token = jwt.sign(
        {
            user_id: email
        },
        process.env.TOKEN_KEY,
        {
            expiresIn: "10h"
        }
    );
    return token

}

module.exports = {
    cleanLogin,
    cleanRegister
}