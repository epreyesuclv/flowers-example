const { insertFlower, selectFlowerOwner, insertFlowerOnwer } = require("./floweQuerys");

async function cleanInsert(data, email) {



    const old = await selectFlowerOwner(data.name, email)
    const oldFlower = await selectFlowerOwner(data.name, email)
    if (!(oldFlower.length)) {
        console.log("cleanOperatins-cleanInsert", [old, oldFlower])

        await insertFlower(data.name, data.region, data.color)
        await insertFlowerOnwer(data.name, email)

    } else if (!old.length) {

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