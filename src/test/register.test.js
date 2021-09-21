const { doRegister } = require('./request/register')

const defaultRes = {

}



test('registration works', async () => {
    const data = await doRegister();
    expect(data).toBe("All input is required")
})