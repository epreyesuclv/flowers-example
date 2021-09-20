InputRequire.prototype = Object.create(Error.prototype)

DuplicateEmail.prototype = Object.create(Error.prototype)

IncorrectCredentials.prototype = Object.create(Error.prototype)


module.exports = {
    InputRequire,
    DuplicateEmail,
    IncorrectCredentials
}