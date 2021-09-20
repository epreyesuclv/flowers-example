

const axios = require('axios')



function doRegister() {
    var resp = ""
    const options = {
        method: 'POST',
        url: 'http://localhost:4000/register',
        headers: { 'Content-Type': 'application/json' },
        data: { name: 'pedrito@gamil.com', password: '1234' }
    };
    axios.request(options).then(function (response) {
        //console.log( response)
    }).catch(function (error) {
        resp = error.response.data
    });
    next()
}

module.exports = {
    doRegister
}

