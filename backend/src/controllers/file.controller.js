const fileModel = require("../models/file.model")

exports.addOne = async (req, res) => {
  if (!req.file) {
    res.sendStatus(400)
  } else {
    console.log(req.body)
    res.sendStatus(200)
    //const data = await fileModel.createOne()
  }
}

exports.getAll = (req, res) => {}
