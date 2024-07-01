import { projects } from '../data/data'
import './Intro.css'

const Intro = () => {
  const projectList = projects.map((project) => (
    // <div key={project.id} className="container-sm flex-wrap justify-content-center my-3"></div>
    <div key={project.id} id="projectDiv" className="container-sm d-flex flex-column flex-wrap justify-content-center my-3 py-3">
      <h3 className="fw-bold">{project.title}</h3>
      <span className="mt-2 lead">{project.info}</span>
      <span id="techSpan" className="mt-2 lead">{project.techStack}</span>
      <div id="linkDiv" className="d-flex mt-5">
        <a href={project.demo} className="btn btn-secondary">Live Demo</a>
        <a href={project.sourceCode} className="btn btn-secondary">Source Code</a>
      </div>
    </div>
  ))
    return (
      <div className="container-sm d-flex flex-column flex-wrap justify-content-sm-center my-3">
        <h3 className="fw-bold">Hello! I&apos;m Lila, and I have a huge passion for designing, particularly in UI/UX. </h3>
        <p className="lead">With years of experience in frontend development, I&apos;ve honed my skills to create visually appealing, user-friendly, and responsive websites. I&apos;ve developed several projects on my own, showcasing my expertise and creativity. Explore my portfolio to see the projects I&apos;ve brought to life and get a glimpse of my design and development journey.</p>
        <a href="https://drive.google.com/file/d/1BMcv97j8cXZx4kntfjLF6UvIyy6CzO6O/view" className="btn btn-secondary">Download my Portfolio</a>
        <div className="flex flex-wrap">
          {projectList}
        </div>
      </div>
    )
  }
  
  export default Intro
  