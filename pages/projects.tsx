import Navbar from "../components/Navbar";
import Head from "next/head";
import { Projects } from '../data/data_projects'; 

function Project({ isDarkMode }) {
  return (
    <>
      <Head>
        <title>Projects</title>
      </Head>

      <Navbar />

      <section className="hero">
        <div className="container">
          <div className="text-wrapper w-full">
            <h1 className="text-title">Projects</h1>
            <p className="description">
              These are the projects that I have completed so far, which include both academic and non-academic coursework.
            </p>

            <div className="project-wrapper">
              <div className="project-grid">
                {Projects.map(project => (
                  <div className="project-item" key={project.id}>
                    <img src={project.img} className="project-image" alt={project.name} />
                    <p className="project-name">{project.name}</p>
                    <p className="project-description">{project.description}</p>
                    <div className="project-links">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" >Visit Project</a>
                      {project.sourceCode && (
                        <a href={project.sourceCode} target="_blank" rel="noopener noreferrer">
                          <img
                            src={isDarkMode ? "github-dark.svg" : "github-light.svg"}
                            alt="GitHub"
                            className="github-logo"
                          />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
