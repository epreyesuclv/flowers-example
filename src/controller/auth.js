const { create, findOne } = require("../jwt/model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

async function register(req, res) {
    try {
        const { firstName, lastName, email, password } = req.body

        //veryfiying if the fields are empty
        if (!(email && password && firstName && lastName))
            res.status(400).send("All input is required")


        //veryfying if the user already exist

        const oldUser = await findOne( email )
        console.log(oldUser)
        if (oldUser)
            return res.status(409).send("user aready exist")

        //encypting the pass
        encryptedPass = await bcrypt.hash(password, 11)

        //creating token
        const token = jwt.sign({
            user_id: email
        },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h"
            })

        //creating the user
        const user = await create(
            firstName,
            lastName,
            email.toLowerCase(),
            encryptedPass
        )


        res.status(201).json(user)
    }
    catch (err) {
        console.log(err)
    }
}


async function login(req, res) {
    try {
        const { email, password } = req.body

        if (!(email && password)) {
            res.status(401).send("All input are required")
        }
        console.log(email)
        const user = await findOne(email)
        console.log(user)

        if (user && (await bcrypt.compare(password, user.pass))) {
            const token = jwt.sign(
                {
                    user_id: email
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h"
                }
            )

            user.token = token

            res.status(200).json(user)
        }
        res.status(400).send("Incorrect credentials")

    } catch (err) {

        console.log(err)
    }

}
module.exports = {
    register,
    login
}