const { login, register } = require("../authentication/auth")


//the back authentication is not actually needed but I will include for future changes
async function backLogin(req, res) {
    req.body.busy = "back"

    await login(req, res)

}


//the back authentication is not actually needed but I will include for future changes
async function backRegister(req, res) {


    req.body.busy = "back"

    await register(req, res)
}


async function frontRegister(req, res) {
    req.body.busy = "front"

    await register(req, res)
}


async function frontLogin(req, res) {
    req.body.busy = "front"

    await login(req, res)

}





module.exports = {
    backLogin,
    frontLogin,
    backRegister,
    frontRegister
}