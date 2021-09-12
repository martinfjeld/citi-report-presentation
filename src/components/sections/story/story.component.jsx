import React from "react";
import "./story.animations";
import "./story.styles.scss";

export const Story = ({ children }) => {
  return (
    <div className="story">
      {children.map((child) => {
        return (
          <div className="slide">
            {child.props.children}
            <img src={child.props.image} />
          </div>
        );
      })}
    </div>
  );
};
