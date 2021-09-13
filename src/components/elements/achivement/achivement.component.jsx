import React from "react";
import "./achivement.styles.scss";

export const Achivement = ({ header, children }) => {
  return (
    <div className="achivement-card">
      <div className="achivement-card__image">
        <img src="./images/achivement.svg" alt="" />
      </div>
      <div className="achivement-card__list">
        <h3>{header}</h3>
        {children}
      </div>
    </div>
  );
};
