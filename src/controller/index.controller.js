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
const createflower = async (req, res) => {
    const { name, region, color } = req.body
    const oldf = await selectflower(name);
    console.log("in index.controller",oldf )
    if (oldf)
        return res.status(409).send("ya existe ese nombre")
    //console.log ("name " + name )
    const response = await insertflower(name, region, color)
    console.log("in index.controller", response)
    res.status(200).json(response)

}

const delflower = async (req, res) => {
    id = req.params.name
    const element = await deleteflower(id)

    res.status(200).json(element)
}

module.exports = {
    getflowers,
    getflowerById,
    createflower,
    delflower
}