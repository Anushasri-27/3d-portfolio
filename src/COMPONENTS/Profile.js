import React, { useEffect, useRef } from "react";

import "../styles/profile.css";
import gsap from "gsap";
const Profile = ({timeline}) => {
  let conRef = useRef (null);
  useEffect(() => {
    timeline.fromTo(
      [conRef],
      1,
      {
        opacity: 0,
        delay: 9,
        y: "100",

        stagger: {
          amount: 0.4,
        },
      },
      {
        opacity: 1,
        delay: 5.5,
        y: "0",
      }
    );
  
  
    let images = gsap.utils.toArray(".img");

    gsap.set(images, { perspective: 1000, rotationY: -25 });

    // loop through each image...
    images.forEach((image, i) => {
      let siblingsLeft = images.slice(i + 1),
        siblingsRight = images.slice(0, i);

      image.addEventListener("mouseenter", () => {
        gsap.to(image, {
          rotationY: 0,
          scale: 1.15,
          x: 0,
          duration: 0.3,
          overwrite: true,
        });

        if (siblingsLeft.length) {
          gsap.to(siblingsLeft, {
            x: -140,
            rotationY: -25,
            duration: 0.3,
            scale: 1,
            overwrite: true,
          });
        }
        if (siblingsRight.length) {
          gsap.to(siblingsRight, {
            x: 50,
            rotationY: -25,
            duration: 0.3,
            scale: 1,
            overwrite: true,
          });
        }
      });

      image.addEventListener("mouseleave", () => {
        gsap.to(images, {
          rotationY: -25,
          scale: 1,
          duration: 0.3,
          x: 0,
          overwrite: true,
        });
      });
    });
  });
  return (
    <div ref={el => conRef=el} className="con" >
      <h1 className="title">PROFILE</h1>
      <a href="https://www.facebook.com/anusha.srivastava27">
        <div id="img4" class="img">
          <h1 className="h1"></h1>
        </div>
      </a>
      <a href="https://www.instagram.com/srivastava_anusha27/">
        <div id="img3" class="img">
          <h1 className="h1"></h1>
        </div>
      </a>
      <a href="https://github.com/Anushasri-27">
        <div id="img2" class="img">
          <h1 className="h1"></h1>
        </div>
      </a>
      <a href="https://www.linkedin.com/in/anusha-srivastava-ab8a4616a/">
        <div id="img1" class="img">
          <h1 className="h1"></h1>
        </div>
      </a>
    </div>
  );
};

export default Profile;
