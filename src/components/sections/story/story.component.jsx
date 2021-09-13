import React, { useEffect } from "react";
import "./story.styles.scss";

import { v4 as uuidv4 } from "uuid";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

/**
 * A scrollytelling component that renders full-page images with specified text as you scroll
 *
 * @param {children}
 * @returns full-page image with text as you scoll to the DOM
 *
 */
export const Story = ({ children }) => {
  const images = children.filter((child) => child.type === "img");
  const childrens = children.filter((child) => child.type !== "img");
  let uqID = `img${uuidv4()}`;
  let uqContainerID = `${uuidv4()}`;

  useEffect(() => {
    images.map((_, i) => {
      gsap.to(`div#img${i - 1}${uqID}`, {
        scrollTrigger: {
          trigger: `div#child${i}${uqID}`,
          start: "top 100px",
          end: "top 100px",
          scrub: 0.5,
        },
        opacity: 0,
      });
    });

    images.map((_, i) => {
      gsap.to(`div#img${i}${uqID}`, {
        scrollTrigger: {
          trigger: `div#child${i}${uqID}`,
          start: "top top",
          end: "bottom top",
          scrub: 3,
        },
        ease: "sine",
        scale: 1.1,
      });
    });

    children.map((_, i) => {
      gsap.to(`div#child${i}${uqID}`, {
        scrollTrigger: {
          trigger: `div#child${i}${uqID}`,
          start: "top center",
          end: "top top",
          scrub: 1,
        },
        ease: "sine",
        opacity: 1,
      });
    });

    gsap.to(`#c${uqContainerID}`, {
      scrollTrigger: {
        trigger: `.story`,
        start: "top top",
        end: "bottom bottom",
        pin: `#c${uqContainerID}`,
      },
    });
  }, []);

  return (
    <div className="story" id={uqContainerID}>
      {
        <div className="images" id={`c${uqContainerID}`}>
          {
            // Render the images
            images.map((img, i) => {
              return (
                <div
                  className="image-element"
                  id={`img${i}${uqID}`}
                  key={i}
                  style={{ zIndex: -i }}
                >
                  {img}
                </div>
              );
            })
          }
        </div>
      }
      {
        <div className="children">
          {
            // Render the children that is other than images
            childrens.map((child, i) => {
              return (
                <div className="child-element" id={`child${i}${uqID}`} key={i}>
                  {child}
                </div>
              );
            })
          }
        </div>
      }
    </div>
  );
};
