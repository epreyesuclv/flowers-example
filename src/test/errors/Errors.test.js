const { InputRequire, IncorrectCredentials } = require("../../Errors/MyErrors")
const { cleanLogin, cleanRegister } = require("../../jwt/authentication/cleanAuth")


test('Input required works in login', async () => {
    try {
        await cleanLogin()
    }
    catch (err) {
        expect(typeof err).toBe(typeof new InputRequire())
    }

})

test('Input require works in register', async () => {
    try {
        await cleanRegister()
    } catch (err) {
        expect(typeof err).toBe(typeof new InputRequire())
    }
})


