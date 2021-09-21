const jwt = require("jsonwebtoken")

function verifyingToken(req, res, next) {
    const token = req.body.token || req.query || req.headers["access-token"]

    if (!token) {
        return res.status(403).send("token required")
    }
    try {

        const decode = jwt.verify(token, process.env.TOKEN_KEY)
        req.user = decode

    } catch (err) {
        return res.status(401).send("Invalid Token")
    }
    next()
}




module.exports = {
    verifyingToken
}