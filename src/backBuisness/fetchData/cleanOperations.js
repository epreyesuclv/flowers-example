const { insertflower, selectflower, selectflowerOwner, insertflowerOnwer } = require("./flowerOwnerQuerys");

async function cleanInsert(data, email) {

    for (d in data) {

        const old = await selectflowerOwner(data.name, email)
        const oldflower = await selectflowerOwner(data.name, email)

        if (!oldflower) {

            await insertflower(data.name, data.region, data.color)
            await insertflowerOnwer(data.name, email)

        } else if (!old) {

            await insertflowerOnwer(data.name, email)

        }


    }
}