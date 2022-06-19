import { useState, useEffect } from "react"
import axios from "axios"

import Form from "./components/Form"

function App() {
  const [filesDisplay, setFilesDisplay] = useState([])

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
      <Form setFilesDisplay={setFilesDisplay} />
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
