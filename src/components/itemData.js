import React, { useState } from "react";
import "./itemData.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "reactstrap";

function ImgData({ data }) {
  const [TarihiGoster, setTarihiGoster] = useState(false);
  const [AciklamayiGoster, setAciklamayiGoster] = useState(false);
  const [BasligiGoster, setBasligiGoster] = useState(false);
  const [UrlyiGoster, setUrlyiGoster] = useState(false);

  return (
    <div className="img-data">
      {data && (
        <div className="buttons">
          <div className="data-item">
            <button
              className="button-1"
              color="warning"
              size="lg"
              onClick={() => setTarihiGoster(!TarihiGoster)}
            >
              Tarih
            </button>
            {TarihiGoster && <div className="item-details">{data.date}</div>}
          </div>

          <div className="data-item">
            <button
              className="button-2"
              color="primary"
              size="lg"
              onClick={() => setAciklamayiGoster(!AciklamayiGoster)}
            >
              Açıklama
            </button>
            {AciklamayiGoster && (
              <div className="item-details">{data.explanation}</div>
            )}
          </div>

          <div className="data-item">
            <button
              className="button-3"
              color="success"
              size="lg"
              onClick={() => setBasligiGoster(!BasligiGoster)}
            >
              Başlık
            </button>
            {BasligiGoster && <div className="item-details">{data.title}</div>}
          </div>

          <div className="data-item">
            <button
              className="button-4"
              color="danger"
              size="lg"
              onClick={() => setUrlyiGoster(!UrlyiGoster)}
            >
              URL
            </button>
            {UrlyiGoster && (
              <div className="item-details">
                <a rel="noopener noreferrer" target="_blank" href={data.url}>
                  {data.url}
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default ImgData;
