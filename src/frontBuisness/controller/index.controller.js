const { getAllflowers } = require("../fetchData/flowersQuerys");
const { MONGO_URI, USER, PASSWORD, PORT, DATABASE } = process.env
const { Pool } = require("pg");

const { buyFlowerNode } = require("../../backBuisness/fetchData/requestData");


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
    const { name, amount, adress, user } = req.body

    //the user property will use in future updates
    const response = await buyFlowerNode(name, amount, adress)

    res.status(response.status).send(response.data)

}


module.exports = {
    getflowers,
    getflowerById,
    buyFlower
}