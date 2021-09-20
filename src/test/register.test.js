const { doRegister } = require('./request/register')

const defaultRes = {

}



test('registration works', () => {
    expect(doRegister()).toBe("All input is required")
})