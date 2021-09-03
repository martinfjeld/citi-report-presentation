import React from "react";
import "./container.styles.scss";

export const Container = ({ orientation, children }) => {
  return (
    <div className={`container-div`}>
      <div className={`container-div__content ${orientation}`}>{children}</div>
    </div>
  );
};

Container.defaultProps = {
  orientation: "centered",
};
