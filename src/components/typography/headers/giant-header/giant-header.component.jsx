import React from "react";
import { lineBreak } from "../../../../functions/functions";
import "./giant-header.styles.scss";
import { v4 as uuidv4 } from "uuid";

export const GiantHeader = ({
  text,
  undertext,
  firstBreak,
  secondBreak,
  id,
}) => {
  return (
    <div className="giant-header-container" id={id}>
      <h1 className="giant-header">
        {lineBreak(text, firstBreak, secondBreak)}
      </h1>
      <h3 className="undertext">{undertext}</h3>
    </div>
  );
};

GiantHeader.defaultProps = {
  text: "default text",
};
