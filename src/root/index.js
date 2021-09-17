const {Router, request } = require("express");
const { getflowers,createflower, getflowerById, delflower} = require("../controller/index.controller");
const router = Router();


router.get("/flowers",getflowers)
router.get("/flowers/:id",getflowerById)
router.post("/flowers", createflower)
router.delete("/flowers/:id",delflower) 

module.exports = router
