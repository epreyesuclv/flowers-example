const { json } = require("express");
//const mongoose = require("mongoose");
const { MONGO_URI, USER, PASSWORD, PORT, DATABASE } = process.env

const { Pool } = require("pg")


const pool = new Pool({
    host: "localhost",
    user: USER,
    password: PASSWORD,
    port: PORT,
    database: DATABASE
})



async function selectflower(id) {
    //write your query select here
    const response = await pool.query(`SELECT * FROM flower WHERE name = ($1)`, [id])
    return response.rows[0]
}

async function getAllflowers() {
    //write your querys here


    const response = await pool.query(`SELECT * FROM flower WHERE flower.name in (SELECT flowerName FROM flowerOnwner);  `)

    return response.rows



}


module.exports = {
    getAllflowers,
    selectflower

}