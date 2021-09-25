
const { UserBack } = require("../../models/userBack")
const { UserFront } = require("../../models/userFront")

async function create(data) {
    let response
    if (data.endPoint)

        response = await UserBack.create(data).catch(handlercatch)
    else
        response = await UserFront.create(data).catch(handlercatch)

<<<<<<< HEAD
    return response?.toJSON() ?? "ya existe este usuario"
=======
    return response.toJSON()
>>>>>>> end users querys and flowers querys

}


async function findOneBack(email) {

    const response = await UserBack.findByPk(email).catch(handlercatch)
<<<<<<< HEAD
    console.log("user finded succeful")
=======

>>>>>>> end users querys and flowers querys
    return response
}

async function findOneFront(email) {

<<<<<<< HEAD
    const response = await UserFront.findByPk(email).catch(handlercatch)
    //console.log("authQuerys ",response.toJSON())
=======
    const response = await UserBack.findByPk(email).catch(handlercatch)

>>>>>>> end users querys and flowers querys
    return response

}

function handlercatch(err) {
<<<<<<< HEAD
    console.log("authquerys-handlercatcher",err)
=======
    console.log("authquerys-handlercatcher")
>>>>>>> end users querys and flowers querys
}

module.exports = {
    findOneBack,
    findOneFront,
    create
}