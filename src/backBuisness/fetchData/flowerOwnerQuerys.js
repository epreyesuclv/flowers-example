const { Pool } = require("pg")
const { selectflower, Flower } = require("../../models/flowers")
const { UserBack } = require("../../models/userBack")
const { FlowerOwner } = require("../../models/flowerOwner")
const { DATABASE, PASSWORD, USER, PORT } = process.env
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "1234",
    port: "5432",
    database: "auth"
})



//get all vendor given a flower
async function getAllVendor(flowerName) {

    const response = FlowerOwner.findAll({
        where: {
            FlowerName: flowerName
        }
    }).catch(handlercatch)

    return response
}




async function insertflower(name, region, color) {

    //write your query insert here
    const response = await Flower.create({ name: name, region: region, color: color })

    //console.log(response)

    return response
}


//insert new one vendor's flower

async function insertflowerOnwer(name, owner) {

    const response = await FlowerOwner.create({ flowerName: name, ownerName: owner })

    return response
}


async function selectflowerOwner(id, email) {

    //write your query select here
    const response = await FlowerOwner.findAll({
        where: {
            flowerName: id,
            ownerName: email
        }
    })
    return response
}


//delete a one vendor's flower

async function deleteflower(idflower, owner) {
    //write your query delete here
    await FlowerOwner.destroy({
        where: {
            flowerName: idflower,
            ownerName: owner
        })
    return response
}


module.exports = {
    deleteflower,
    getAllVendor,
    selectflowerOwner,
    insertflower,
    insertflowerOnwer
}