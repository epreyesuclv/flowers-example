
//get all vendor given a flower

//insert new one vendor's flower

//delete a one vendor's flower

async function insertflower(name, region, color) {
    //write your query insert here


    await pool.query(`INSERT INTO flower (name, region, color) values ($1,$2,$3);`, [name, region, color])
    
    //console.log(response)
    return await selectflower(name)
}

async function selectflower(id) {
    //write your query select here
    response = await pool.query(`SELECT * FROM flower WHERE name = ($1)`, [id])
    return response.rows[0]
}

async function deleteflower(id) {
    //write your query delete here
    response = await pool.query(`DELETE FROM flower WHERE name = $1`, [id])
    return response
}

