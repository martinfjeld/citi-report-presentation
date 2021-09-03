import React from "react";
import { Icon } from "../../../icon/icon.component";
import "./paragraph.styles.scss";

export const Paragraph = ({ columns, children, sideline, icon }) => {
  return (
    <div className={icon && "icon-paragraph"}>
      {icon && <Icon src={icon} />}
      <p
        className={`paragraph ${sideline ? "side-line" : null}`}
        style={{ width: `${100 / columns}%` }}
      >
        {children}
      </p>
    </div>
  );
};

Paragraph.defaultProps = {
  text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
  columns: 1,
  sideline: false,
};
