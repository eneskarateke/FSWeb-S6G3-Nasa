import React from "react";
import ImgData from "./itemData";
import "./Body.css";

function Body({ data, handleDateChange, secilenTarih }) {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  if (month < 10) {
    month = "0" + month;
  }
  if (day < 10) {
    day = "0" + day;
  }

  const maxDate = `${year}-${month}-${day}`;

  if (!data) {
    return null; // Don't render anything if data is undefined
  }

  if (data.bakim) {
    return (
      <div className="body-container">
        <div className="body-wrapper">
          <p className="maintenanceMessage">{data.bakim}</p>
        </div>

        {data.media_type === "image" && (
          <div className="img-container">
            <img className="nasaIMG" src={data.url} alt={data.title} />
          </div>
        )}

        {data.media_type === "video" && (
          <div className="video-container">
            <iframe
              className="videoData"
              src={data.url}
              title={data.title}
            ></iframe>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="body-container">
      <div className="body-wrapper">
        <div className="dateContainer">
          <p>Lütfen bir tarih seçin</p>
          <input
            className="dateInput"
            type="date"
            value={secilenTarih}
            onChange={handleDateChange}
            min="1995-01-01"
            max={maxDate}
          />
        </div>

        <ImgData data={data} />
      </div>

      {data.media_type === "image" && (
        <div className="img-container">
          <img className="nasaIMG" src={data.url} alt={data.title} />
        </div>
      )}

      {data.media_type === "video" && (
        <div className="video-container">
          <iframe
            className="videoData"
            src={data.url}
            title={data.title}
          ></iframe>
        </div>
      )}
    </div>
  );
}

export default Body;
