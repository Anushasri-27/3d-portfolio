import React, { useEffect, useRef } from "react";
import "../styles/about.css";
import '../styles/content.css';
import Transition from "./Transition";
import {gsap , Power3} from "gsap";
import Cursor from "./Cursor";
import Content from "./Content";
import Image from "./Image";
const About = () => {
  let ctl= new gsap.timeline();
  let ease=Power3.easeOut();
  const about = gsap.timeline();
  const abouth1 = useRef(null);
  const aboutimg = useRef(null);
  useEffect(() => {
    about.from(
      abouth1.current,
      {
        duration: 0.6,
        skewX: 10,
        x: -100,
        opacity: 0,
      },
      "-=3.5"
    );

    about.from(
      aboutimg.current,
      {
        duration: 0.5,
        y: -200,
        opacity: 0,
      },
      "-=3"
    );
  });
  return (
    <div>
      <Cursor />
      <Transition timeline={about} />
      <div className="about-image about-overlay" ref={aboutimg}></div>
      <div className="conatiner-about" ref={abouth1}>
        <h1>About Me</h1>
      </div>
      <div className="containers">
        <Content timeline={ctl} />
        <Image timeline={ctl} ease={ease} />
      </div>
    </div>
  );
};

export default About;
