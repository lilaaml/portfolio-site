import { projects } from '../data/data'
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import './Projects.css'

const Projects = () => {
    const techArray = (techStack) => {
        return techStack.map(tech => <li key={tech.id} id="tech-list">{tech}</li>)
    }
    
    const projectList = projects.map((project) => (
        <div key={project.id} id="project-item" className="pb-3 text-center">
          <h3 id="project-title" className="fw-bold">{project.title}</h3>
          <span id="project-info" className="mt-2 lead">{project.info}</span>
          <div id="tech-grid" className="mt-3 d-flex flex-wrap justify-content-center">{techArray(project.techStack)}</div>
          <div id="link-grid" className="mt-3 d-flex flex-wrap justify-content-center">
            <a href={project.demo} className="btn btn-secondary">Live Demo <BsBoxArrowUpRight className="link-icon" /></a>
            <a href={project.sourceCode} className="btn btn-secondary">Source Code <FaGithub className="link-icon" /></a>
          </div>
        </div>
      ))

  return (
    <div className="container-sm justify-content-sm-center">
      <div id="project-grid" className="d-flex flex-wrap justify-content-center">
        {projectList}
      </div>
    </div>
  )
}

export default Projects
