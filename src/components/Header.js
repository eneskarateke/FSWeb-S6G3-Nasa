import React from "react";
import "./Header.css"

function Header() {
  return (
    <div className="header">
      <p className="headerTitle">
        NASADAN Günün FOTOĞRAFI! </p>
      <p className="aciklama">
        Lütfen hangi tarihteki fotoğrafı görmek istiyorsanız aşağıdan o tarihi seçin! <span role="img" aria-label='go!'>🚀</span>!
      </p>
    </div>
  );
}

export default Header;
