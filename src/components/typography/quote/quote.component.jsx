import React from "react";
import "./quote.styles.scss";

export const Quote = ({ quote, person, image }) => {
  return (
    <div className="quote">
      <div
        className="quote__image"
        style={{
          backgroundImage: `url('${image}')`,
        }}
      ></div>
      <p>
        <span className="quote__mark">«</span>
        {quote}
        <br />
        <span className="quote__person">{person}</span>
      </p>
    </div>
  );
};
