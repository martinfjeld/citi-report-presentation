import React, { useState } from "react";
import "./navigation.styles.scss";
import { v4 as uuidv4 } from "uuid";

export const NavigationBar = ({ logo, links }) => {
  const [toggle, setToggle] = useState(false);

  const handleClick = () => setToggle(!toggle);

  const generateLinks = (obj) => {
    const keys = Object.keys(obj);
    console.log(keys);
    return keys.map((key, i) => {
      return (
        <li key={uuidv4()}>
          <a href={obj[key]}>{key}</a>
        </li>
      );
    });
  };

  return (
    <div className="navigation-bar">
      <div className="navigation-bar__logo">
        <img src={logo} alt="logo" />
      </div>
      {links && (
        <div className="navigation-bar__links" onClick={handleClick}>
          hehe
          {toggle && <ul>{generateLinks(links)}</ul>}
        </div>
      )}
    </div>
  );
};
