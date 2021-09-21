

const axios = require('axios')



async function doRegister() {
    var resp = ""
    const options = {
        method: 'POST',
        url: 'http://localhost:4000/register',
        headers: { 'Content-Type': 'application/json' },
        data: { email: 'pedrito@gamil.com', password: '1234' , firstName: "pedro", lastName: "perez" }
    };
    resp = await axios.request(options).then(function (response) {
        //console.log( response)
    }).catch(function (error) {
        resp = error.response
    });
    
    return resp
}

module.exports = {
    doRegister
}

