import React from "react";
import "./header-secondary.styles.scss";
import { lineBreak } from "../../../../functions/functions";

export const HeaderSecondary = ({
  text,
  centered,
  firstBreak,
  secondBreak,
}) => {
  return (
    <h2 className={`header-medium ${centered && "centered-text"}`}>
      {lineBreak(text, firstBreak, secondBreak)}
    </h2>
  );
};

HeaderSecondary.defaultProps = {
  text: "Medium header",
};
