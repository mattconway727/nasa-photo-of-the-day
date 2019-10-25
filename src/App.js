import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import ImageStuff from "./ImageThing";

function App() {
  const [stuff, setStuff] = useState({});

  useEffect(() => {
    console.log("yay");

    axios
      .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then(res => {
        console.log("nasa res");
        setStuff(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="App">
      <div className="stuff">
        <h1>Stuff</h1>
        <p>{stuff.copyright}</p>
        <ImageStuff stuff={stuff} />
      </div>
    </div>
  );
}

export default App;
