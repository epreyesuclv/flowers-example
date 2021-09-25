
const { UserBack } = require("../../models/userBack")
const { UserFront } = require("../../models/userFront")

async function create(data) {
    let response
    if (data.endPoint)

        response = await UserBack.create(data).catch(handlercatch)
    else
        response = await UserFront.create(data).catch(handlercatch)

    return response.toJSON()

}


async function findOneBack(email) {

    const response = await UserBack.findByPk(email).catch(handlercatch)

    return response
}

async function findOneFront(email) {

    const response = await UserBack.findByPk(email).catch(handlercatch)

    return response

}

function handlercatch(err) {
    console.log("authquerys-handlercatcher")
}

module.exports = {
    findOneBack,
    findOneFront,
    create
}