import React, { useRef, useEffect } from "react";

import "../styles/home.css";
import Transition from "./Transition";
import gsap from "gsap";
import Cursor from "./Cursor";
import "../styles/project.css";
import Projects from "./Projects";

const Home = () => {
  let consTl = new gsap.timeline();
  const home = gsap.timeline();
  const homeh1 = useRef(null);
  const homeimg = useRef(null);
  useEffect(() => {
    home.from(
      homeh1.current,
      {
        duration: 0.6,
        skewX: 10,
        x: -100,
        opacity: 0,
      },
      "-=3.5"
    );

    home.from(
      homeimg.current,
      {
        duration: 0.5,
        y: -200,
        opacity: 0,
      },
      "-=3"
    );
  });
  return (
    <div className="homeWrap">
      <Cursor />
      <Transition timeline={home} />
      <div className="home-image home-overlay" ref={homeimg}></div>
      <div className="conatiner-home" ref={homeh1}>
        <h1>Home Page</h1>
      </div>
      <div className="containers">
        <Projects timeline={consTl} />
      </div>
    </div>
  );
};

export default Home;
