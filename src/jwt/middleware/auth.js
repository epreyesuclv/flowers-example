const { login, register } = require("../authentication/auth")

async function backLogin(req, res) {
    req.busy = "back"

    await login(req, res)

}

async function backRegister(req,res) {
    req.busy = "back"

    await register(req, res)
}

async function frontRegister() {
    req.busy = "front"

    await register(req, res)
}

async function frontLogin() {
    req.busy = "front"

    await login(req, res)

}





module.exports = {
    backLogin,
    frontLogin,
    backRegister,
    frontRegister
}