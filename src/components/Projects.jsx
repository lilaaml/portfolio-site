import { projects } from '../data/data'
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import './Projects.css'

const Projects = () => {
    const techArray = (techStack) => {
        // return techStack.map(tech => <li key={tech.id} id="tech-list"><span className="dot d-inline-flex mx-2"></span>{tech}</li>)
        return techStack.map(tech => <div key={tech.id} id="tech-list" className="d-flex flex-wrap justify-content-center">
          <div className="d-flex">
            <span className="dot"></span>
            <span className="mx-2">{tech}</span>
          </div>
        </div>)
    }
    
    const projectList = projects.map((project) => (
        <div key={project.id} id="project-item" className="pb-3 px-3 text-center">
          <h3 id="project-title" className="fw-bold">{project.title}</h3>
          <span id="project-info" className="mt-2 lead">{project.info}</span>
          <div id="tech-grid" className="mt-3 d-flex flex-wrap justify-content-center">{techArray(project.techStack)}</div>
          <div id="link-grid" className="mt-3 d-flex flex-wrap justify-content-center">
            {
              project.demoAvailable ? (
                <a href={project.demo} className="btn btn-secondary live-btn">Live Demo <BsBoxArrowUpRight className="link-icon" /></a>
              ) : (
                <a href={project.demo} className="btn btn-secondary disabled live-btn">Live Demo Unavailable</a>
              )
            }
            <a href={project.sourceCode} className="btn btn-secondary source-btn">Source Code <FaGithub className="link-icon" /></a>
          </div>
        </div>
      ))

  return (
    <div className="container-sm justify-content-sm-center mb-5">
      <div id="project-grid" className="d-flex flex-wrap justify-content-center">
      <h3 className="fw-bold text-center mt-3 mb-0">Featured Projects</h3>
        {projectList}
      </div>
    </div>
  )
}

export default Projects
