const express = require("express")

const fileController = require("../controllers/file.controller")
const multer = require("../middlewares/multer")

const router = express.Router()

router.post("/", multer, fileController.addOne)
router.get("/", fileController.getAll)
router.delete("/", fileController.deleteOne)

module.exports = router
