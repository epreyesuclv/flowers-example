const { Pool } = require("pg")
const { DATABASE, PASSWORD, USER, PORT } = process.env
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "1234",
    port: "5432",
    database: "auth"
})


async function create(firstName, lastName, email, password, token) {

    const response = await pool.query(`INSERT INTO users (firstname, lastname, email, pass, token) values ($1,$2,$3,$4,$5);`, [firstName, lastName, email, password, token])
    return response.rows[0]

}
async function findOne(email) {

    const response = await pool.query(`SELECT * FROM users WHERE email = ($1)`, [email])
    return response.rows[0]

}

module.exports = {
    findOne,
    create
}