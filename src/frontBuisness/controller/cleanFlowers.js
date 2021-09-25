const { Flower } = require("../../models/flowers")

async function getAllflowers() {

    return await Flower.findAll().catch(handlercatch)

}
async function selectflower(id) {

    return await Flower.findByPk(id).catch(handlercatch)

}


function handlercatch(err) {

}
module.exports = {
    selectflower,
    getAllflowers
}