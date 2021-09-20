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

/* //for mongo
function connect () {
    mongoose
        .connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true
        })
        .then(() => {
            console.log("Successfull")
        })
        .catch((error) => {
            console.log("failed")
            console.log(error)
            process.exit(1)
        })
};
*/

//this is for testing
/*
const lista = [

    {

        id: 1,
        name: "jhon",
        email: "jhon@hotmail.com"
    }
    ,
    {

        id: 2,
        name: "martha",
        email: "martha@hotmail.com"
    }];
///
*/
async function getAllflowers() {
    //write your querys here


    const response = await pool.query(`SELECT * FROM flower`)
    
    return response.rows



}


async function insertflower(name, color, region) {
    //write your query insert here


    const response = await pool.query(`INSERT INTO flower (name, region, color) values ($1,$2,$3);`, [name, region, color])
    //console.log(response)
    return response
}

async function selectflower(id) {
    //write your query select here
    response = await pool.query(`SELECT * FROM flower WHERE id = ($1)`,[id])
    return response.rows
}

async function deleteflower(id) {
    //write your query delete here
    response = await pool.query(`DELETE FROM flower WHERE id = $1`,[id])
    return response

 

}
module.exports = {
    getAllflowers,
    selectflower,
    insertflower,
    deleteflower,
}
