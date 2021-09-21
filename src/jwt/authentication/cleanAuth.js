
const { create, findOne } = require("../config/authQuerys")

const bcrypt = require("bcryptjs")
const { IncorrectCredentials, InputRequire, DuplicateEmail } = require("../../Errors/MyErrors")



//throw: InputRequireError , IncorrectCredentialError
async function cleanLogin(email, password) {

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


//throws : IntputRequireError , DuplicateEmailError , IncorrectCredentialsError
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

    if (user === undefined)
        throw new IncorrectCredentials

    return user

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
    cleanLogin,
    cleanRegister
}