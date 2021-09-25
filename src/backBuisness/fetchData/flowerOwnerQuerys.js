const { Pool } = require("pg")
const { selectflower } = require("../../frontBuisness/fetchData/flowersQuerys")
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
    const response = pool.query(`SELECT ownerName FROM flowerOwner WHERE flowerName = ${flowerName}`)
    return response.rows
}




async function insertflower(name, owner, region, color) {

    //write your query insert here

    await pool.query(`INSERT INTO flower (name, region, color) values ($1,$2,$3);`, [name, region, color])
    //console.log(response)

    return await selectflower(name)
}


//insert new one vendor's flower


async function insertflowerOnwer(name, owner) {

    await pool.query(`INSERT INTO flowerOwner (flowerName,OwnerName) values ($1,$2)`, [name, owner])

    return await selectflower(name)
}


async function selectflowerOwner(id, email) {

    //write your query select here
    const response = await pool.query(`SELECT * FROM flowerOwner WHERE (flowerName = ($1) and ownerName = ($2))`, [id, email])
    
    return response.rows[0]
}


//delete a one vendor's flower

async function deleteflower(idflower, owner) {
    //write your query delete here

    const response = await pool.query(`DELETE FROM flowerOwner WHERE (flowerName = $1 and flowerOwner = $2 ) `, [idflower, owner])
    return response
}


module.exports = {
    deleteflower,
    getAllVendor,
    selectflower,
    selectflowerOwner,
    insertflower,
    insertflowerOnwer
}