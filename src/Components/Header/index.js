import React from "react";

import bell from "../../Assets/bell.svg";

import "./style.css";

function Header() {
  return (
    <header>
      <div className="top">
        <div className="logo">
          <img
            src={"https://app.rocketseat.com.br/static/media/logo.0ae02df1.svg"}
            alt="imagem de rocketseat"
          />
        </div>
        <div className="profile-wrapper">
          <img src={bell} className="bell" />
          <div className="profile">
            <h2>Murilo de Souza Neves</h2>
            <h4>murilodesouzaneves@gmail.com</h4>
          </div>
          <img
            src={
              "https://app.rocketseat.com.br/static/media/user-placeholder.adc3e83e.png"
            }
            alt="imagem de perfil"
            className="profile-img"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
