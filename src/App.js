import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import axios from "axios";
const apiKey = "eOBci1ZBa9CwWPJfYSzpPuihyh4iSqjhlxPGyRDp";
const apiUrl = `https://api.nasa.gov/planetary/apod`;

function App() {
  const [data, setData] = useState();

  const [secilenTarih, setSecilenTarih] = useState("");
  const handleDateChange = (event) => {
    setSecilenTarih(event.target.value);
  };

  const mockData = {
    copyright: "Stefano Zanarello",
    date: "2023-04-26",
    explanation:
      "Was this a lucky shot? Although many amazing photographs are taken by someone who just happened to be in the right place at the right time, this image took skill and careful planning. First was the angular scale: if you shoot too close to the famous Arc de Triomphe in  Paris, France, the full moon will appear too small.  Conversely, if you shoot from too far away, the moon will appear  too large and not fit inside the Arc. Second is timing: the Moon only appears centered inside the Arc for small periods of time -- from this distance less than a minute. Other planned features include lighting, relative brightness, height, capturing a good foreground, and digital processing.  And yes, there is some luck involved -- for example, the sky must be clear. This time, the planning was successful, bringing two of humanity's most famous icons photographically together for all to enjoy.   Today's adventure link: Click \"Paris\" (above)",
    hdurl: "https://apod.nasa.gov/apod/image/2304/MoonArc_zanarello_1365.jpg",
    media_type: "image",
    service_version: "v1",
    title: "The Moon through the Arc de Triomphe",
    url: "https://apod.nasa.gov/apod/image/2304/MoonArc_zanarello_960.jpg",
    bakim:
      "Site şu an bakımdadır. En kısa sürede tarih seçimi aktif olacaktır!",
  };

  useEffect(() => {
    console.log("Initial data state:", data); // Initial console log
    axios
      .get(apiUrl, {
        params: {
          api_key: apiKey,
          date: secilenTarih,
          thumbs: true,
        },
      })
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        setData(mockData);
        console.log("error > ", error);
      });
  }, [secilenTarih]);

  console.log("data >", { data });

  return (
    <div className="App">
      <Header />
      <Body
        secilenTarih={secilenTarih}
        handleDateChange={handleDateChange}
        data={data}
      />
      <Footer />
    </div>
  );
}

export default App;
