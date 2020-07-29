import React from "react";
import "./App.css";

import Header from "./Components/Header";
import Courses from "./Components/Courses";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content-wrapper">
        <div className="content">
          <Courses
            num="01"
            imgsrc="https://app.rocketseat.com.br/static/media/Starter.64c237cc.svg"
            description="Torne-se um programador desejado"
            description1=" no mercado com esses cursos gratuitos"
            color="#7159C1"
          />
          <Courses
            num="02"
            imgsrc="https://app.rocketseat.com.br/static/media/LaunchBase.08285320.svg"
            description="Domine a programação do zero"
            description1="e tenha acesso às melhores oportunidades do mercado"
            color="#FD951F"
          />
          <Courses
            num="03"
            imgsrc="https://app.rocketseat.com.br/static/media/GoStack.83a178a0.svg"
            description="Treinamento imersivo"
            description1="nas tecnologias mais modernas de desenvolvimento web e mobile"
            color="#04D361"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
