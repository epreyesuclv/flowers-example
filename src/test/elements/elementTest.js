const axios = require('axios')

async function doCreate() {

    const options = {
        method: 'POST',
        url: 'http://localhost:4000/flowers',
        headers: { 'Content-Type': 'application/json' },
        data: { name: "rosa", region: "america", color: "rojo" }
    };

    await axios.request(options).then(function (response) {
        status = response.status
        id = response.id
        //console.log("in elementTest ",response)
    }).catch(function (error) {
        status = error.response.status
        //console.log (error.response)
    });
    return {
        status: status,
        id: id
    }

}


async function doGetById(id) {
    const options = {
        method: 'GET',
        url: `http://localhost:4000/flowers/${id}`,
        headers: { 'Content-Type': 'application/json' }

    };

    await axios.request(options).then(function (response) {
        status = response.status
    }).catch(function (error) {
        status = error.response.status
        //console.log (error)
    });
    return {
        status: status

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
    doCreate,
    doDelete,
    doGetAll,
    doGetById
}