import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-container-P">
        Sitemiz her gün, Nasa'dan gelen günün içeriğiyle güncellenmektedir.{" "}
        <span role="img" aria-label="go!">
          🚀
        </span>
        !
      </p>
    </div>
  );
}

export default Footer;
