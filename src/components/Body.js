import React, { useState, useEffect } from "react";
import "./Body.css";
import axios from "axios";

const apiKey = "r2O9yH5TmgDNZgMeiUYWofsaycfwlaNHDT2JF7Ce";

function Body() {
  const [data, setData] = useState(null);
  const [secilenTarih, setSecilenTarih] = useState("");
  const [TarihiGoster, setTarihiGoster] = useState(false);
  const [AciklamayiGoster, setAciklamayiGoster] = useState(false);
  const [BasligiGoster, setBasligiGoster] = useState(false);
  const [UrlyiGoster, setUrlyiGoster] = useState(false);

  const handleDateChange = (event) => {
    setSecilenTarih(event.target.value);
  };

  useEffect(() => {
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=r2O9yH5TmgDNZgMeiUYWofsaycfwlaNHDT2JF7Ce${
      secilenTarih ? "&date=" + secilenTarih : ""
    }`;
    axios
      .get(apiUrl, {
        params: {
          api_key: apiKey,
          date: secilenTarih,
        },
      })
      .then((response) => {
        setData(response.data);
        console.log("data >", response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [secilenTarih]);

  return (
    <div className="body-container">
      <div className="body-wrapper">
        <div className="dateContainer">
            <p>Aşağıdan Tarih seçin</p>
          <input
            className="dateInput"
            type="date"
            value={secilenTarih}
            onChange={handleDateChange}
          />
        </div>

        {data && (
          <div className="img-data">
            <div className="data-item">
              <button onClick={() => setTarihiGoster(!TarihiGoster)}>
                Tarih
              </button>
              {TarihiGoster && <div className="item-details">{data.date}</div>}
            </div>

            <div className="data-item">
              <button onClick={() => setAciklamayiGoster(!AciklamayiGoster)}>
                Açıklama
              </button>
              {AciklamayiGoster && (
                <div className="item-details">{data.explanation}</div>
              )}
            </div>

            <div className="data-item">
              <button onClick={() => setBasligiGoster(!BasligiGoster)}>
                Başlık
              </button>
              {BasligiGoster && (
                <div className="item-details">{data.title}</div>
              )}
            </div>

            <div className="data-item">
              <button onClick={() => setUrlyiGoster(!UrlyiGoster)}>URL</button>
              {UrlyiGoster && (
                <div className="item-details">
                  <a target="_blank" href={data.url}>
                    {data.url}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="img-container">
        {data && data.media_type === "image" && (
          <img className="nasaIMG" src={data.url} alt={data.title} />
        )}
        {data && data.media_type === "video" && (
          <div className="videoWrapper">
            <iframe
              className="nasaVideo"
              src={data.url}
              title={data.title}
              allowFullScreen
            />
          </div>

          
        )}
      </div>
    </div>
  );
}

export default Body;
