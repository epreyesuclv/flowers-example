const { json } = require("express");
const { Pool } = require("pg");

const pool = new Pool({
    host: "your-localhost",
    user: "your-user",
    password: "ypur-pass",
    database: "your-databse"
})


//this is for testing
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

function getAllUsers() {
    //write your querys here

    //test code
    return lista
    ///

}


function insertUser(name, email) {
    //write your query insert here

    ///
    console.log("name : " + name + "\n email : " + email)


    //this is only for testing purpose
    const id = lista.length + 1
    lista.push({
        id: id,
        name: name,
        email: email
    })
    return lista[id - 1]
    ///
}

function selectUser(id){
    //write your query select here

    ///

    //this is only for testing purpose
    return lista[id - 1]
}

function deleteUser(id){
    //write your query insert here

    ///
    //this is only for testing purpose
    return lista.pop(id)

}
module.exports = {
    getAllUsers,
    selectUser,
    insertUser,
    deleteUser
}
