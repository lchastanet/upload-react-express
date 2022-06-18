const express = require("express")
const path = require("path")

require("dotenv").config()

const app = express()

app.use(express.json())

const fileRoutes = require("./routes/file.route")

app.use("/file", fileRoutes)

app.use("/uploads", express.static(path.join(__dirname, "../public/uploads")))

app.get("/*", (req, res) => {
  res.status(404).send({ message: "Not found !" })
})

module.exports = app
