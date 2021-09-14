import React from "react";

export const CitiDivider = ({ dark }) => {
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
          fill={dark ? "var(--primary-color)" : "#fff"}
          d="M1366 89c-149.6-26.9-386.6-59.5-683-59.5-159 0-404.1 9.4-683 59.5V0h1366v89z"
        ></path>
      </g>
    </svg>
  );
};
