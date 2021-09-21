const { InputRequire, IncorrectCredentials } = require("../Errors/MyErrors")
const { cleanLogin } = require("../jwt/authentication/cleanAuth")


test('Input required works', () => {
    try {
        cleanLogin()
    }
    catch (err) {
        expect(err.name).toBe(InputRequire)
    }
})

//new change, test branches merging

test('database working ', () => {
    try {
        cleanLogin("asdf", "asdf")
    }
    catch (err) {
        expect(err.name).toBe(IncorrectCredentials)
    }
})

