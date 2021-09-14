import React from "react";
import "./chatbubble.styles.scss";

export const ChatBubble = ({ children }) => {
  return <p className="chatbubble">{children}</p>;
};
