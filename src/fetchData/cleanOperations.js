const { insertFlower, selectFlowerOwner, insertFlowerOnwer } = require("./floweQuerys");

async function cleanInsert(data, email) {



    const old = await selectFlowerOwner(data, email)
    const oldFlower = await selectFlowerOwner(data, email)
    console.log("cleanOperatins-cleanInsert", [old, oldFlower])
    if (!oldFlower) {
        console.log("cleanOperatins-cleanInsert",data)
        await insertFlower(data.name, data.region, data.color)
        await insertFlowerOnwer(data.name, email)

    } else if (!old) {

        await insertFlowerOnwer(data.name, email)

    }



}

async function cleanInsertAll(data, email) {

    for (let d of data) {

        await cleanInsert(d, email)
    }

}

module.exports = {

    cleanInsertAll
}