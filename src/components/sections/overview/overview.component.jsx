import React from "react";

import "./overview.styles.scss";

export const Overview = ({ children }) => {
  return (
    <div className="overview">
      <div className="overview__image">
        <img src="./images/man_helps_woman.png" alt="overview background" />
      </div>
      <div className="overview__links">
        <h2>Featured articles</h2>
        <div className="overview__children">{children}</div>
      </div>
    </div>
  );
};
