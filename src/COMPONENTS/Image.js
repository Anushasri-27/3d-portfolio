import React, { useEffect, useRef } from "react";
import "../styles/image.css";
const Image = ({ timeline, ease }) => {
  let img1 = useRef(null);
  let img2 = useRef(null);
  let img3 = useRef(null);
  useEffect(() => {
    timeline.fromTo(
      [img1, img3],
      1,
      {
        opacity: 0,
        delay: 9,
        x: "100",
        skewY: 10,
        stagger: {
          amount: 0.8,
        },
      },
      {
        opacity: 1,
        delay: 0,
        x: "0",
        skewY: 0,
      }
    );
    timeline.fromTo(
      [img2],
      1,
      {
        opacity: 0,
        y: "-200",
        skewY: 10,
        stagger: {
          amount: 0.8,
        },
      },
      {
        opacity: 1,
        delay: 0,
        y: "0",
        skewY: 0,
      }
    );
  });
  return (
    <div>
      <div className="images">
        <div className="box1" ref={(el) => (img1 = el)}></div>
        <div className="box2" ref={(el) => (img2 = el)}></div>
        <div className="box3" ref={(el) => (img3 = el)}></div>
      </div>
    </div>
  );
};

export default Image;
