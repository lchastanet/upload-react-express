import { useState } from "react"
import axios from "axios"

function App() {
  const [file, setFile] = useState("")
  const [name, setName] = useState("")
  const [filesDisplay, setFilesDisplay] = useState([])

  const handleForm = (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append("file", file)
    formData.append("name", name)

    axios.post("http://localhost:8000/file", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
  }

  return (
    <div className="d-flex mt-5 justify-content-center">
      <form onSubmit={handleForm} className="w-400">
        <div className="form-group mb-2">
          <label htmlFor="inputName">Nom</label>
          <input
            onChange={(e) => setName(e.target.value)}
            className="form-control"
            name="inputName"
            type="text"
          />
        </div>
        <div className="form-group mb-4">
          <label htmlFor="inputFile">Image</label>
          <br />
          <input
            onChange={(e) => setFile(e.target.value)}
            className="form-control-file"
            name="inputFile"
            type="file"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Envoyer
        </button>
      </form>
      <div className="d-flex flex-row mt-5 justify-content-center">
        {filesDisplay.map((picture) => (
          <img
            src={picture.file_path}
            alt={picture.name}
            className="img-thumbnail m-2"
          ></img>
        ))}
      </div>
    </div>
  )
}

export default App
