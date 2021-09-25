const { Pool } = require("pg")
const { DATABASE, PASSWORD, USER, PORT } = process.env
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "1234",
    port: "5432",
    database: "auth"
})


async function create(firstName, lastName, email, password, token, endPoint) {
    let response = ""
    if (endPoint)
        response = await pool.query(`INSERT INTO usersBack (firstname, lastname, email, pass,endPoint token) values ($1,$2,$3,$4,$5,$6);`, [firstName, lastName, email, password, endPoint, token]);
    else
        response = await pool.query(`INSERT INTO usersFront (firstname, lastname, email, pass token) values ($1,$2,$3,$4,$5);`, [firstName, lastName, email, password, token]);

    return response.rows[0]

}


async function findOneBack(email) {

    const response = await pool.query(`SELECT * FROM usersBack WHERE email = ($1)`, [email])
    return response.rows[0]

}

async function findOneFront(email) {

    const response = await pool.query(`SELECT * FROM usersFront WHERE email = ($1)`, [email])
    return response.rows[0]

}

module.exports = {
    findOneBack,
    findOneFront,
    create
}