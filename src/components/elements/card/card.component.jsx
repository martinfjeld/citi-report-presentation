import React from "react";
import "./card.styles.scss";

export const Card = ({ toptext, maintext, bottomtext }) => {
  return (
    <div className="card">
      <div className="card__inner">
        <h3>{toptext}</h3>
        <h1>{maintext}</h1>
        <p>{bottomtext}</p>
      </div>
    </div>
  );
};
