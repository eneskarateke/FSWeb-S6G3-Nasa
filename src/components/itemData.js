import React, {useState} from "react";
import "./itemData.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from "reactstrap"; 

function ImgData ({data}) {
  const [TarihiGoster, setTarihiGoster] = useState(false);
  const [AciklamayiGoster, setAciklamayiGoster] = useState(false);
  const [BasligiGoster, setBasligiGoster] = useState(false);
  const [UrlyiGoster, setUrlyiGoster] = useState(false);

  return(
    <div className="img-data">
      {data && (
        <>
          <div className="data-item">
            <Button color="warning" size="lg" onClick={() => setTarihiGoster(!TarihiGoster)}>
              Tarih
            </Button>
            {TarihiGoster && <div className="item-details">{data.date}</div>}
          </div>

          <div className="data-item">
            <Button color="primary" size="lg" onClick={() => setAciklamayiGoster(!AciklamayiGoster)}>
              Açıklama
            </Button>
            {AciklamayiGoster && (
              <div className="item-details">{data.explanation}</div>
            )}
          </div>

          <div className="data-item">
            <Button color="success" size="lg" onClick={() => setBasligiGoster(!BasligiGoster)}>
              Başlık
            </Button>
            {BasligiGoster && (
              <div className="item-details">{data.title}</div>
            )}
          </div>

          <div className="data-item">
            <Button color="danger" size="lg" onClick={() => setUrlyiGoster(!UrlyiGoster)}>URL</Button>
            {UrlyiGoster && (
              <div className="item-details">
                <a rel="noopener noreferrer" target="_blank" href={data.url}>
                  {data.url}
                </a>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ImgData;