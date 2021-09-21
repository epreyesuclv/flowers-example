const { Pool } = require("pg")
const { DATABASE, PASSWORD, USER, PORT } = process.env
const pool = new Pool({
    host: "localhost",
    user: USER,
    password: PASSWORD,
    port: PORT,
    database: DATABASE
})


async function create(firstName, lastName, email, password, token) {

    try {

        const response = await pool.query(`INSERT INTO users (firstname, lastname, email, pass, token) values ($1,$2,$3,$4,$5);`, [firstName, lastName, email, password, token])
        return response.rows[0]

    } catch (err) {
        console.log(err)
    }
}
async function findOne(email) {
    try {

        const response = await pool.query(`SELECT * FROM users WHERE email = ($1)`, [email])

    } catch (err) {
        console.log(err)
    }
    return response.rows[0]

}

module.exports = {
    findOne,
    create
}