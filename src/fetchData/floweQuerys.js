const { Pool } = require("pg")
const { Flower } = require("../models/Flowers")

const { FlowerOwner } = require("../models/FlowerOwner")
const { UserBack } = require("../models/userBack")
require("dotenv").config
const { DATABASE, PASSWORD, USER, PORT } = process.env


const pool = new Pool({
    host: "localhost",
    user: USER,
    password: PASSWORD,
    port: PORT,
    database: DATABASE
})



//get all vendor given a Flower
async function getVendors(flowerName) {

    const response = await FlowerOwner.findAll({
        where: {
            flowerName: flowerName
        }
    }).catch(handlercatch)
    console.log("flowersQuerys-getVendors", flowerName)
    let vendors = []

    for (let vendor of response) {
        vendors.push(await UserBack.findByPk(vendor.ownerName))
    }

    return vendors
}

async function getAllVendor() {

    const response = await UserBack.findAll()
    //console.log("flowersQuerys ",response)
    return response
}


async function insertFlower(name, region, color) {

    //write your query insert here
    const response = await Flower.create({ name: name, region: region, color: color })

    console.log("flowersQuerys- insertFlower", response)

    //console.log(response)

    console.log("flowersQuerys- insertFlower", response)
    return response
}



//insert new one vendor's Flower

async function insertFlowerOnwer(name, owner) {

    const response = await FlowerOwner.create({ flowerName: name, ownerName: owner })

    return response
}



async function selectFlowerOwner(id, email) {

    //write your query select here
    const response = await FlowerOwner.findAll({
        where: {
            flowerName: id,
            ownerName: email
        }
    })
    return response
}



//delete a one vendor's Flower

async function deleteFlower(idFlower, owner) {
    //write your query delete here
    await FlowerOwner.destroy({
        where: {
            flowerName: idFlower,
            ownerName: owner
        }
    })
    return response
}



async function getAllflowers() {

    return await Flower.findAll().catch(handlercatch)

    //need fix
}



async function selectflower(id) {

    return await Flower.findByPk(id).catch(handlercatch)

}



function handlercatch(err) {
    console.log("flowersQuerys - handlercatch ", err)
}

module.exports = {
    deleteFlower,
    getAllVendor,
    getVendors,
    selectFlowerOwner,
    insertFlower,
    insertFlowerOnwer,
    selectflower,
    getAllflowers
}