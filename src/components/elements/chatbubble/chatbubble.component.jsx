import React from "react";
import "./chatbubble.styles.scss";

export const ChatBubble = ({ children, sender, reciever, name }) => {
  return (
    <p
      className={`chatbubble ${sender ? "sender" : undefined} ${
        reciever ? "reciever" : undefined
      }`}
    >
      {(sender || reciever) && (
        <h3>
          {name}
          {reciever && "Question"}:
        </h3>
      )}
      {children}
    </p>
  );
};
