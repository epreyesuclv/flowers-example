const { doRegister, doRegisterWithToken, doLogin } = require('./request/authentication')


let token;
test('registrtion', async () => {
    const data = await doRegister();

    expect(data.status).toBe(200)
    token = data.token
})
test('login ', async() => {
    const data = await doLogin()
    expect(data.status).toBe(200)

    token = data.token

})
test('auth with token', async () => {
    const data = await doRegisterWithToken(token)

    expect(data.status).toBe(200)
})