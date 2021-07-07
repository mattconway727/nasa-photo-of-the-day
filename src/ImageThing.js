import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function ImageStuff(things) {
  return (
    <div className="App">
      <p>Image wouldve went here</p>
      <img src={things.stuff.hdurl} />
      <p>{things.stuff.explanation}</p>
    </div>
  );
}

export default ImageStuff;
