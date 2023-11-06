import React, { useEffect, useRef } from "react";
import "../styles/content.css";
const Content = ({ timeline}) => {
  let h1 = useRef(null);
  let pText = useRef(null);
  let btn = useRef(null);
  useEffect(()=>{
    timeline.fromTo([h1.children ,pText ,btn],1 ,{
      opacity:0,
      delay:9,
      y: "100",
      skewY: 10,
      stagger:{
        amount: .4
      }
    },{
      opacity:1,
      delay:5.5,
      y: "0",
      skewY: 0,
    })

  })
  return (
    <>
      <div className="content">
        <h1 className="content-inner-bold" ref={(el) => (h1 = el)}>
          <div>Full-Stack Web Developer </div>
        </h1>
        <p ref={(el) => (pText = el)}>
          Hello, I'm Anusha Srivastava, a motivated and enthusiastic Full Stack
          Developer with a passion for creating impactful web applications.I am
          an avid learner and continuously seek opportunities to enhance my
          skills. My curiosity and adaptability allow me to quickly grasp new
          technologies and stay updated with industry trends. As a newcomer to
          the field, I am excited to work with experienced professionals and
          contribute my fresh perspective to projects. I am a strong believer in
          the power of teamwork and collaboration, and I'm always eager to learn
          from my peers and mentors.
        </p>
        <a
          href="https://www.linkedin.com/in/anusha-srivastava-ab8a4616a/"
          ref={(el) => (btn = el)}
        >
          {" "}
          <button>Explore</button>
        </a>
      </div>
    </>
  );
};

export default Content;
