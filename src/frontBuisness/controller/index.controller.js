
const { Pool } = require("pg")
require("dotenv").config
const {  USER, PASSWORD, PORT, DATABASE } = process.env

const { buyFlowerNode } = require("../../fetchData/requestData");
const { getAllflowers } = require("../../fetchData/floweQuerys")

const pool = new Pool({
    host: "localhost",
    user: USER,
    password: PASSWORD,
    port: PORT,
    database: DATABASE
})


const getflowers = async (req, res) => {
    // while(true);
    const flowers = await getAllflowers()
    //console.log(flowers)
    
    res.status(200).json(flowers)
}



const getflowerById = async (req, res) => {
    id = req.params.name
    arr = await selectflower(id)
    //console.log(arr)
    res.status(200).json(arr)

}


const buyFlower = async (req, res) => {
    const { name, amount, address, user } = req.body
    console.log("index.controller ", address)
    //the user property will use in future updates
    const response = await buyFlowerNode(name, amount, address)

    res.status(response.status).send(response.data)

}


module.exports = {
    getflowers,
    getflowerById,
    buyFlower
}