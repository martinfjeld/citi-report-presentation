import React from "react";
import { Header } from "../../typography/headers/header/header.component";

import "./overview.styles.scss";

export const Overview = ({ children }) => {
  return (
    <div className="overview">
      <div className="overview__links">
        <Header text="Featured articles" size="medium" />
        <div className="overview__children">{children}</div>
      </div>
    </div>
  );
};
