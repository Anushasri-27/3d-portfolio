import React, { useEffect, useRef } from "react";
import '../styles/contact.css';
import '../styles/project.css'
import gsap from "gsap";
import Transition from "./Transition";
import Cursor from "./Cursor";
import Profile from "./Profile";
const Contact = () => {
  const Profiletl = new gsap.timeline();
  const contact = gsap.timeline();
  const contacth1 = useRef(null);
  const contactimg = useRef(null);
  useEffect(() => {
    contact.from(
      contacth1.current,
      {
        duration: 0.6,
        skewX: 10,
        x: -100,
        opacity: 0,
      },
      "-=3.5"
    );

    contact.from(
      contactimg.current,
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
      <Transition timeline={contact} />
      <div className="contact-image contact-overlay" ref={contactimg}></div>
      <div className="conatiner-contact" ref={contacth1}>
        <h1>Contact</h1>
      </div>
      <div className="containers">
          <Profile timeline={Profiletl} />   
      </div>
    </div>
  );
};

export default Contact;
