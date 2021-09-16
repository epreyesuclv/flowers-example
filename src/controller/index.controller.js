const { getAllUsers, insertUser,selectUser, deleteUser } = require("../database/databaseQuerys");


const getUsers = (req, res) => {
    const users = getAllUsers()
    console.log(users)

    res.status(200).json(users)
}



const getUserById = (req, res) => {
    id = req.params.id

    res.status(200).json(selectUser(id))
    
}
const createUser = (req, res) => {
    const { name, email } = req.body


    res.status(200).json(insertUser(name, email))

}

const delUser = (req, res) =>{
    id = req.params.id
    res.status(200).json(deleteUser(id))
}

module.exports = {
    getUsers,
    getUserById,
    createUser,
    delUser
}