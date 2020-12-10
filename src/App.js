import React, {useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Image from './Image'

function App() {
  
  const { data,setData } = useState({});
  console.log('DATA',data)
  useEffect(() => {
    console.log('DATA2',data)
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-03-1`)
    .then(response => {
      console.log('You got API stuff',response.data)
    })
    .catch(error => {
      alert("something didn't work!")
    })
  })
  return null;

}

// const rootID = document.getElementById('root');
//   console.log(rootID)// Anchor Point
export default App;
