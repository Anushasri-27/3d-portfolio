import React, { useEffect, useRef } from "react";
import "../styles/cursor.css";
import gsap from "gsap";
const Cursor = () => {
  let tl = gsap.timeline();
  let tl2 = gsap.timeline();
  let cursor = useRef(null);
  let posX = 0;
  let posY = 0;
  let mouseX = 0;
  let mouseY = 0;

  useEffect(() => {
    tl.to({}, 0.016, {
      repeat: -1,
      onRepeat: function () {
        posX += (mouseX - posX) / 10;
        posY += (mouseY - posY) / 10;
        tl.set(cursor, {
          css: {
            left: posX ,
            top: posY ,
           
          },
        });
      },
    });
    document.addEventListener("mousemove", function (e) {
      mouseX = e.pageX;
      mouseY = e.pageY;
    })
    tl2.fromTo(cursor,{
        duration:0.2,
        delay: 1,
        opacity:0,
    },{
        delay:1,
        opacity:1,
    })
  });
  return <div className="cursor" ref={(el) => (cursor = el)}></div>;
};

export default Cursor;
