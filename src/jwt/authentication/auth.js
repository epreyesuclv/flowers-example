
const { InputRequire, IncorrectCredentials, DuplicateEmail, ConnectionError } = require("../../Errors/MyErrors")
const { cleanLogin, cleanRegister } = require("../authentication/cleanAuth")


async function register(req, res) {

    //console.log("request", req)
    const { firstName,
        lastName,
        email,
        password,
        busy,
        endPoint
    } = req.body

    console.log("auth-register", endPoint)

    try {

        const user = await cleanRegister(firstName, lastName, email, password, busy, endPoint)

        res.status(200).json(user)


    } catch (err) {

        if (err instanceof IncorrectCredentials)
            res.status(401).send("somthing was wrong with your credentials")

        if (err instanceof InputRequire)
            res.status(403).send("all input is require")

        if (err instanceof DuplicateEmail)
            res.status(409).send("the user already exist")
        else {
            console.log(err)
            res.status(503).send("sonthing was wrong with the server")
        }
    }


}

async function login(req, res) {
    try {
        const { email, password, busy } = req.body

        const user = await cleanLogin(email, password, busy)
        return res.status(200).json(user)
    } catch (err) {

        if (err instanceof IncorrectCredentials)
            res.status(401).send("Incorrect creedentials")

        if (err instanceof InputRequire)
            res.status(403).send("All input is require")
            
        if (err instanceof ConnectionError)
            //504
            res.status(504).send("We sorry your request cant be procces in this moment")
        else {
            console.log(err)
            res.status(503).send("sonthing was wrong with the server")
        }
    }

}


module.exports = {
    login,
    register
}
