import React from "react";
import "./navigation.styles.scss";

export const NavigationBar = () => {
  return (
    <div className="sticky-navigation">
      <img src="./images/logo/citi-logo.svg" />
      <div
        className="search-icon"
        style={{
          padding: "2rem",
          backgroundColor: "#fff",
          width: "1rem",
          height: "1rem",
          backgroundImage: "url('./images/icons/loupe.svg')",
          backgroundSize: "2rem",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
    </div>
  );
};
