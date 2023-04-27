import React, { useState} from "react";
import "./Body.css";

function Body({data, handleDateChange, secilenTarih}) {
 
  
  const [TarihiGoster, setTarihiGoster] = useState(false);
  const [AciklamayiGoster, setAciklamayiGoster] = useState(false);
  const [BasligiGoster, setBasligiGoster] = useState(false);
  const [UrlyiGoster, setUrlyiGoster] = useState(false);
  
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
                  <a rel="noopener noreferrer"  target="_blank" href={data.url}>
                    {data.url}
                  </a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

  {data && data.media_type === "image" && (
    <div className="img-container">
    <img className="nasaIMG" src={data.url} alt={data.title} />
    </div>)}
  
    {data && data.media_type === "video" && (
    <div className="video-container"> 
    <iframe className="videoData" src={data.url} title={data.title}></iframe>
    </div>  )}
      
      </div>
          
        );
      }

export default Body;
