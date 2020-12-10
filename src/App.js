import React, { useState, useEffect } from "react";
import Header from './components/Header'
import axios from 'axios';
import "./App.css";

function App() {
  
  const [ data,setData ] = useState({});

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=tM6Q1H6XVjOyNPlefI2DKyeRS91eH8NbHV1KhqcT`)
    .then(response => {
      setData(response.data)
    })
    .catch(error => {
      alert("something didn't work!")
    })
  }, [])
  return (
    <div>
      <Header data={data} />
    </div>
  )

}

// const rootID = document.getElementById('root');
//   console.log(rootID)// Anchor Point
export default App;
