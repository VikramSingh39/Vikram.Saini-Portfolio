import React, { useEffect, useState } from "react";
import { projectsData } from "./Data";
import WorkCard from "./WorkCard";

const Works = () => {

const [filterdProject, setFilteredProject] = useState(
  projectsData.filter((project)=> project.category === "react")
);
const [activeButton, setActiveButton] = useState('react');

  return (
    <>
      {/* Project Button */}
      <div className="projectButtonContainer">
        <button
          className={`projectButton ${activeButton === "all" ? "active-work" : ""}`}
          onClick={() => {
            setFilteredProject(projectsData);
            setActiveButton("all");
          }}
        >
          All
        </button>

        <button
          className={`projectButton ${activeButton === "react" ? "active-work" : ""}`}
          onClick={() => {
            const filtered = projectsData.filter((project) => project.category === "react");
            setFilteredProject(filtered);
            setActiveButton("react");
          }}
        >
          React
        </button>

        <button
          className={`projectButton ${activeButton === "js" ? "active-work" : ""}`}
          onClick={() => {
            const filtered = projectsData.filter((project) => project.category === "js");
            setFilteredProject(filtered);
            setActiveButton("js");
          }}
        >
          JavaScript
        </button>

        <button
          className={`projectButton ${activeButton === "html-css" ? "active-work" : ""}`}
          onClick={() => {
            const filtered = projectsData.filter((project) => project.category === "html-css");
            setFilteredProject(filtered);
            setActiveButton("html-css");
          }}
        >
          HTML, CSS/Tailwind
        </button>
      </div>


      {/* Porject' Card */}
      <div className="work__container container grid">
        {filterdProject.map((project, index) => (
          <WorkCard
            key={index}
            item={project}
            deploymentLink={project.deploymentLink}
          />
        ))}
      </div>
    </>
  );
};

export default Works;
