const fileModel = require("../models/file.model")
const fs = require("fs")
const path = require("path")

exports.addOne = async (req, res) => {
  if (!req.file) {
    res.sendStatus(400)
  } else {
    const data = await fileModel.createOne({
      name: req.body.name,
      file_path: req.file.filename,
    })

    res.sendStatus(200)
  }
}

exports.deleteOne = async (req, res) => {
  const id = parseInt(req.query.id)
  const removed = await fileModel.deleteOne(id)

  await fs.promises.unlink(
    path.join(__dirname, `../../public/uploads/${removed.file_path}`)
  )

  res.sendStatus(204)
}

exports.getAll = async (req, res) => {
  const data = await fileModel.getAll()

  const formatedData = data.map((img) => {
    const file_path = `${req.protocol}://${req.get("host")}/uploads/${
      img.file_path
    }`

    return { ...img, file_path }
  })

  res.json(formatedData)
}
