

const axios = require('axios')

const USER_EMAIL = "lderty@gmail.com"
const USER_PASS = "1234"

async function doRegister() {
    let status;
    let token;
    const options = {
        method: 'POST',
        url: 'http://localhost:4000/register',
        headers: { 'Content-Type': 'application/json' },
        data: { email: USER_EMAIL, password: USER_PASS, firstName: "pedro", lastName: "perez" }
    };
    await axios.request(options).then(function (response) {
        status = response.status
        token = response.data.token
    }).catch(function (error) {
        status = error.response.status
        //console.log (error.response)
    });
    //console.log(resp)
    return {
        token: token,
        status: status
    }
}

async function doLogin() {
    let status = "";
    let token;
    const options = {
        method: 'POST',
        url: 'http://localhost:4000/login',
        headers: { 'Content-Type': 'application/json' },
        data: {
            email: USER_EMAIL,
            password: USER_PASS
        }
    };
    await axios.request(options).then(function (response) {
        status = response.status
        token = response.data.token
        //console.log(response)
    }).catch(function (error) {
        status = error.response.status

        //console.log(error.response.token)
    });
    //console.log(resp)
    return {
        token: token,
        status: status
    }
}

async function doRegisterWithToken(token) {
    let status = "";
    const options = {
        method: 'POST',
        url: 'http://localhost:4000/welcome',
        headers: { 'Content-Type': 'application/json' },
        data: { token: token }
    };
    await axios.request(options).then(function (response) {
        status = response.status
        //console.log(response)
    }).catch(function (error) {
        status = error.response.status
        //console.log("token ",error.response)
    });
    //console.log(resp)
    return {
        status: status
    }
}
module.exports = {
    doRegister,
    doLogin,
    doRegisterWithToken
}

