const { Router, request } = require("express");
const { getflowers, getflowerById, buyFlower } = require("../controller/index.controller");
const router = Router();

const { verifyingToken } = require("../../jwt/middleware/authToken")



router.get("/flowers", getflowers)
router.get("/flowers/:name", getflowerById)
router.post("/buy", verifyingToken, buyFlower)
module.exports = router
