const { create } = require("../jwt/model/user")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

async function register(req, res) {
    try {
        const { firstName, lastName, email, password } = req.body

        //veryfiying if the fields are empty
        if (!(email && password && firstName && lastName))
            res.status(400).send("All input is required")


        //veryfying if the user already exist
        
        const oldUser = await user.findOne({ email })
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
        const user = await create (
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


async function login (req,res){

    const { email, password} = req.body

}
module.exports = {
    register,
    login
}