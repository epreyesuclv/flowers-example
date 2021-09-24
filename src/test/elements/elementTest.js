const axios = require('axios')

const defaultElemet = { name: "hes", region: "america", color: "rojo" }

async function doCreate() {
    let element = {}
    const options = {
        method: 'POST',
        url: 'http://localhost:4000/flowers',
        headers: { 'Content-Type': 'application/json' },
        data: defaultElemet
    };

    await axios.request(options).then(function (response) {
        //console.log("in elementTest ",response)
        status = response.status
        element = response.data
       
    }).catch(function (error) {
        status = error.response.status
        //console.log("in elementTest ",error)
        //console.log (error.response)
    });
    return {
        status: status,
        element: element
    }

}


async function doGetById(id) {

    let element = {}
    const options = {
        method: 'GET',
        url: `http://localhost:4000/flowers/${id}`,
        headers: { 'Content-Type': 'application/json' }

    };

    await axios.request(options).then(function (response) {
        status = response.status
        element = response.data
    }).catch(function (error) {
        status = error.response.status
        //console.log (error)
    });
    return {
        status: status,
        element: element
    }
}


async function doDelete(id) {
    const options = {
        method: 'DELETE',
        url: `http://localhost:4000/flowers/${id}`,
        headers: { 'Content-Type': 'application/json' }
    };

    await axios.request(options).then(function (response) {

        status = response.status
        // console.log (response)
    }).catch(function (error) {

        status = error.response.status
        //console.log (error.response)
    });
    return {
        status: status
    }

}


async function doGetAll() {
    const options = {
        method: 'GET',
        url: `http://localhost:4000/flowers`,
        headers: { 'Content-Type': 'application/json' }
    };

    await axios.request(options).then(function (response) {

        status = response.status

    }).catch(function (error) {

        status = error.response.status
        //console.log (error.response)
    });
    return {
        status: status
    }
}


module.exports = {
    defaultElemet,
    doCreate,
    doDelete,
    doGetAll,
    doGetById
}