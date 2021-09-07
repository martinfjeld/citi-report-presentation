import React from "react";
import "./paragraph-section.styles.scss";
import { paragraphColumns } from "../../../functions/functions";

// LICENSE: MARTIN FJELD

export const ParagraphSection = ({ paragraph, columns, wordLimit }) => {
  return (
    <div className="paragraph-section">
      {paragraphColumns(paragraph, wordLimit, columns)}
    </div>
  );
};

ParagraphSection.defaultProps = {
  columns: 3,
  wordLimit: 100,
};
