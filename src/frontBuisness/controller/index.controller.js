
const { Pool } = require("pg")
require("dotenv").config
const { USER, PASSWORD, PORT, DATABASE } = process.env

const { buyFlowerNode ,fetchFromAllNodes} = require("../../fetchData/requestData");
const { getAllflowers,selectflower } = require("../../fetchData/floweQuerys")

const pool = new Pool({
    host: "localhost",
    user: USER,
    password: PASSWORD,
    port: PORT,
    database: DATABASE
})


const getflowers = async (req, res) => {
    fetchFromAllNodes()
    try {
        // while(true);
        const flowers = await getAllflowers()
        //console.log(flowers)
        res.status(200).json(flowers)
    } catch (err) {
        res.status(503).send("somthing was wrong with the server see log")
    }

}



const getflowerById = async (req, res) => {
    try {
        const id = req.params.name || ""
        const arr = await selectflower(id)
        //console.log(arr)
        res.status(200).json(arr)
    } catch (err) {
        res.status(503).send("somthing was wrong with the server see log")
    }

}


const buyFlower = async (req, res) => {
    const { name, amount, address, user } = req.body
    console.log("index.controller ", address)
    try {
        //the user property will use in future updates
        const response = await buyFlowerNode(name, amount, address)

        res.status(response.status).send(response.data)
    } catch (err) {
        res.status(503).send("somthing was wrong with the server see log")
    }

}


module.exports = {
    getflowers,
    getflowerById,
    buyFlower
}