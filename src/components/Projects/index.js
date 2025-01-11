import React, { useEffect, useState } from "react";
import "./index.scss";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import projectData from '../../data/projects.json';

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  
    return () => clearTimeout(timer) // Proper cleanup
  }, [])
    
    const renderProjects = (projects) => {
        return (
            <div className="images-container">
    {projects.map((project, idx) => (
        <div className="image-box" key={idx}>
            <img 
                src={project.cover}
                className="portfolio-image" 
                alt={project.title || `Project ${idx + 1}`} 
            />
            <div className="content">
                <p className="title">{project.title}</p>
                <h4 className="description">{project.description}</h4>
                <button className="btn" onClick={() => window.open(project.url)}>View</button>
            </div>
        </div>
    ))}
</div>

        );
    }
    return (
        <>
            <div className="container projects-page">
            <h1 className="page-title">
                <AnimatedLetters
                letterClass={letterClass}
                strArray={"Projects".split("")}
                idx={15} 
                />
            </h1>
            <div>{renderProjects(projectData.projects)}</div>
        
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Projects