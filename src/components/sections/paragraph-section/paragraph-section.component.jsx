import React from "react";
import "./paragraph-section.styles.scss";
import { paragraphColumns } from "../../../functions/functions";
import { CitiDivider } from "../../dividers/citi-divider/citi-divider.component";

/**
 * A simple text-component that formats a bunch of text into specified measures.
 * @param {string} paragraph The text you want to display
 * @param {number} columns Amount of horizontal columns you want to format to the DOM
 * @param {number} wordLimit The text you want to display
 */
export const ParagraphSection = ({ paragraph, columns, wordLimit, width }) => {
  return (
    <div style={{ backgroundColor: "var(--primary-color)" }}>
      <CitiDivider />
      <div className="paragraph-section" style={{ width: width }}>
        {paragraphColumns(paragraph, wordLimit, columns)}
      </div>
    </div>
  );
};
