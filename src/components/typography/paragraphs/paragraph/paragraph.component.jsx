import React from "react";
import "./paragraph.styles.scss";

export const Paragraph = ({ columns, text }) => {
  return (
    <p className="paragraph" style={{ width: `${100 / columns}%` }}>
      {text}
    </p>
  );
};

Paragraph.defaultProps = {
  text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
  columns: 1,
};
