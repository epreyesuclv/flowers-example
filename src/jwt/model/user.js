//const mongoose = require("mongoose")
const { Pool } = require("pg")

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "1234",
    port: "5432",
    database: "auth"
})


/*
const userShema = new mongoose.Schema({
    firstName: {
        type: String,
        default: null
    },
    lastName: {
        type: String,
        default: null
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    },
    token: {
        type: String,
        default: null
    },
})
*/
async function create(firstName, lastName, email, password, token) {
    const response = await pool.query(`INSERT INTO users (firstname, lastname, email, pass, token) values ($1,$2,$3,$4,$5);`, [firstName, lastName, email, password, token])
    return response.rows[0]
}

async function findOne(email) {
    const response = await pool.query(`SELECT * FROM users WHERE email = ($1)`, [email])
    return response.rows[0]

}
function Flower() {
    this.name
    this.color = null
    this.region = null
}

//module.exports = mongoose.model("User" ,userShema)
module.exports = {
    create,
    findOne,
    Flower
}