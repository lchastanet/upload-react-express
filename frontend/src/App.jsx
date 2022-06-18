import { useState } from "react"
import axios from "axios"
import { useEffect } from "react"

function App() {
  const [files, setFiles] = useState([])
  const [name, setName] = useState("")
  const [filesDisplay, setFilesDisplay] = useState([])

  const handleForm = (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append("file", files[0])
    formData.append("name", name)

    axios
      .post("http://localhost:8000/file", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => setFilesDisplay([]))
  }

  const handleDelete = (e) => {
    const id = e.target.getAttribute("data-id")

    axios
      .delete(`http://localhost:8000/file?id=${id}`)
      .then((res) => setFilesDisplay([]))
  }

  useEffect(() => {
    axios
      .get("http://localhost:8000/file")
      .then((res) => setFilesDisplay(res.data))
  }, [filesDisplay])

  return (
    <div className="d-flex flex-column mt-5 justify-content-center align-items-center">
      <form onSubmit={handleForm} className="w-40">
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
            onChange={(e) => setFiles(e.target.files)}
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
          <div key={picture.id} className="d-flex flex-column">
            <img
              src={picture.file_path}
              alt={picture.name}
              className="img-thumbnail m-2"
              style={{ height: "100px" }}
            ></img>
            <button
              data-id={picture.id}
              onClick={handleDelete}
              className="btn btn-danger mx-3"
              aria-hidden="true"
            >
              Supprimer
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
