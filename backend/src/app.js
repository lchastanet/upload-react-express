const express = require("express")
const path = require("path")

const cors = require("cors")

require("dotenv").config()

const app = express()

app.use(express.json())
app.use(cors())

const fileRoutes = require("./routes/file.route")

app.use("/file", fileRoutes)

app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")))

app.get("/*", (req, res) => {
  res.status(404).send({ message: "Not found !" })
})

module.exports = app
