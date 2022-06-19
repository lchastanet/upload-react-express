import { useState } from "react"

import Form from "./components/Form"
function App() {
  const [filesDisplay, setFilesDisplay] = useState([])

  return (
    <div className="d-flex mt-5 justify-content-center">
      <Form setFilesDisplay={setFilesDisplay} />
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
