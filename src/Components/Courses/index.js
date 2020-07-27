import React from "react";

import "./index.css";

function Courses(props) {
  return (
    <div className="course" color={props.color}>
      <span>{props.num}</span>
      <img src={props.imgsrc} alt="imagem de curso" />
      <p>
        <strong>{props.description}</strong>
        {props.description1}
      </p>
    </div>
  );
}

export default Courses;
