import React from "react";

export const Icon = ({ src }) => {
  return (
    <div>
      <img src={process.env.PUBLIC_URL + src} alt="icon" />
    </div>
  );
};

Icon.defaultProps = {
  src: "./images/not-found.png",
};
