import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import axios from "axios";
const apiKey = "r2O9yH5TmgDNZgMeiUYWofsaycfwlaNHDT2JF7Ce";
const apiUrl = `https://api.nasa.gov/planetary/apod`;


function App() {
  const [data, setData] = useState(null);

  const [secilenTarih, setSecilenTarih] = useState("");
  const handleDateChange = (event) => {
    setSecilenTarih(event.target.value);
  };

  
  useEffect(() => {
   axios
      .get(apiUrl, {
        params: {
          api_key: apiKey,
          date: secilenTarih,
          thumbs:true,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
    }, [secilenTarih]);
    console.log("data >", {data})

  return (
    <div className="App">

    <Header/>
    <Body secilenTarih={secilenTarih} handleDateChange={handleDateChange} data={data}/>
    <Footer/>


    </div>

    )
    
}

export default App;
