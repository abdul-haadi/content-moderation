import "./App.css";
import React, { useState } from "react";

function App() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="App">
      <div className="header">

      </div>
      <div className="title">
        Upload Your image
        <div>
          <input type="file" onChange={handleChange} className="input-field" />
        </div>
      </div>
      <div className="content">
      <div className="selected-image">
        <img src={file}/>
        <p>This is the content you have uploaded</p>
      </div>
      <div className="positive">

      </div>
      <div className="negative">

      </div>
      </div>
    </div>
  );
}

export default App;
