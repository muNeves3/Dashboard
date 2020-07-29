import React from "react";

import "./index.css";

function Courses(props) {
  return (
    <div disabled color={props.color}>
      <div className="course" style={{ borderColor: props.color }}>
        <span style={{ color: props.color, borderColor: props.color }}>
          {props.num}
        </span>
        <img src={props.imgsrc} alt="imagem de curso" />
        <p>
          <strong style={{ color: props.color }}> {props.description}</strong>{" "}
          {props.description1}
        </p>
      </div>
    </div>
  );
}

export default Courses;
