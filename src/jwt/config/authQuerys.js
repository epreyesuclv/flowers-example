
const { UserBack } = require("../../models/userBack")
const { UserFront } = require("../../models/userFront")

async function create(data) {
    let response
    if (data.endPoint)

        response = await UserBack.create(data).catch(handlercatch)
    else
        response = await UserFront.create(data).catch(handlercatch)


    return response?.toJSON() ?? "Cant connect to the databse"
}


async function findOneBack(email) {

    const response = await UserBack.findByPk(email).catch(handlercatch)

    console.log("user finded succeful")
    return response
}

async function findOneFront(email) {


    const response = await UserFront.findByPk(email).catch(handlercatch)
    return response

}

function handlercatch(err) {

    console.log("authquerys-handlercatcher",err)
}

module.exports = {
    findOneBack,
    findOneFront,
    create
}