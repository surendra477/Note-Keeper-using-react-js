import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year}</p>
      <h6>
        <i>Surendra Ediga</i>
      </h6>
    </footer>
  );
}

export default Footer;
