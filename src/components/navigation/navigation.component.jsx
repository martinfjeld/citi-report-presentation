import React, { useState } from "react";
import "./navigation.styles.scss";
import { v4 as uuidv4 } from "uuid";

export const NavigationBar = ({ logo, links }) => {
  // Store the toggle state for the component
  const [toggle, setToggle] = useState(false);

  // An onclick function that sets the toggle mode of the UL menu to the oposite of its current state
  const handleClick = () => setToggle(!toggle);

  //   A function that take links object passed from the component and renders them to the DOM
  const generateLinks = (obj) => {
    // Get the keys from the object
    const keys = Object.keys(obj);

    // Loop through the object and make a new <li> for each link
    return keys.map((key) => {
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
          <div className="burger">
            <div className={`menu-btn ${toggle ? "open" : undefined}`}>
              <div className="menu-btn__burger"></div>
            </div>
          </div>
          {toggle && <ul>{generateLinks(links)}</ul>}
        </div>
      )}
    </div>
  );
};
