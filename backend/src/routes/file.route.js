const express = require("express")

const fileController = require("../controllers/file.controller")

const router = express.Router()

router.post("/", fileController.addOne)
router.get("/", fileController.getAll)

module.exports = router
