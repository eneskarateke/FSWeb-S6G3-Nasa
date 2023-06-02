import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <p className="headerTitle">Astronomy Picture of the Day from Nasa </p>
      <p className="aciklama">
        Aşağıdan tarih seçerek, seçtiğiniz tarihteki fotoğrafı veya videoyu
        görebilirsiniz.
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
    </div>
  );
}

export default Header;
