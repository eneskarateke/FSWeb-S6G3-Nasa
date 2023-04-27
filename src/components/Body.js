import React from "react";
import ImgData from "./itemData";
import "./Body.css";

function Body({data, handleDateChange, secilenTarih}) {
 
  
  

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

        <ImgData data={data}/>
        
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
