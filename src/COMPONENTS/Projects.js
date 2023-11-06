import React, { useEffect, useRef } from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ timeline }) => {
  let projRef = useRef(null);
  let titleRef = useRef(null);
  useEffect(() => {
    timeline.fromTo(
      [projRef, titleRef],
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
  });
  return (
    <div className="projectWrap" ref={(el) => (titleRef = el)}>
      <div className="title">
        <h1>Project</h1>
      </div>
      <div className="prjectGrid" ref={(el) => (projRef = el)}>
        <div>
          <ProjectCard
            CardTitle={"Apple Store"}
            CardSubtitle={"3D Mobile Display"}
            about={
              "The project 3D Website of iPhone Display is an innovative and interactive web application that aims to provide a 3D and immersive representation of iPhone displays for educational and promotional purposes."
            }
            live={"https://6gz473-5173.csb.app/"}
            git={"https://github.com/Anushasri-27/3d_product_display.git"}
          />
        </div>
        <div>
          {" "}
          <ProjectCard
            CardTitle={"Box Office"}
            CardSubtitle={"TVmaze Api"}
            about={
              "The Box-Office  project is a web application that provide users with a platform to discover information about movies and TV shows using data from the TVMaze API project aimed at developing a user-friendly app."
            }
            live={"https://anushasri-27.github.io/box-office-react-app/"}
            git={
              "https://github.com/Anushasri-27/box-office-react-app/tree/gh-pages"
            }
          />
        </div>
        <div>
          {" "}
          <ProjectCard
            CardTitle={"only Zehn"}
            CardSubtitle={"Image Search APP"}
            about={"The Image Search App using Unsplash API is a software project aimed at developing a user-friendly and efficient mobile application for searching and displaying high-quality images from the API. "}
            live={"https://kqr8kv-3000.csb.app/"}
            git={"https://github.com/Anushasri-27/image_search_app.git"}
          />
        </div>
        <div>
          {" "}
          <ProjectCard
            CardTitle={"Wheels on rent"}
            CardSubtitle={" car renting website"}
            about={"The Car Rental Website project is a comprehensive online platform designed to facilitate the seamless rental of automobiles. This website provides a user-friendly and efficient interface."}
            live={"http://wheelsonrent.infinityfreeapp.com/index.php"}
            git={"https://github.com/Anushasri-27/car-rental"}
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
