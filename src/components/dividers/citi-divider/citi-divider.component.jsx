import React from "react";

export const CitiDivider = ({ pos }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      overflow="visible"
      className="divider"
      viewBox="0 0 1366 180"
    >
      <g>
        <path
          fill="#fff"
          d="M1366 89c-149.6-26.9-386.6-59.5-683-59.5-159 0-404.1 9.4-683 59.5V0h1366v89z"
        ></path>
        <path
          fill="#ee1c25"
          d="M1366 58.3C1214.3 31.6 976.4-.2 680 0 386.6.2 151 31.8 0 58.3V90c148.8-27.1 386-60.3 683-60.5 296.9-.2 534 32.6 683 59.5V58.3z"
        ></path>
      </g>
    </svg>
  );
};
