const {Router, request } = require("express");
const { getUsers,createUser, getUserById, delUser} = require("../controller/index.controller");
const router = Router();


router.get("/users",getUsers)
router.get("/users/:id",getUserById)
router.post("/users", createUser)
router.delete("/users/:id",delUser) 
module.exports = router
