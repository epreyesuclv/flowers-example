const { getAllflowers, insertflower, selectflower, deleteflower } = require("../jwt/config/flowersQuerys");
const { MONGO_URI, USER, PASSWORD, PORT, DATABASE } = process.env
const { Pool } = require("pg")


const pool = new Pool({
    host: "localhost",
    user: USER,
    password: PASSWORD,
    port: PORT,
    database: DATABASE
})


const getflowers = async (req, res) => {
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
    const { name, amount, user } = req.body
    const vendor = async () => {
        const vendors = await getAllVendor(name)
    }
    module.exports = {
        getflowers,
        getflowerById,
        buyFlower
    }