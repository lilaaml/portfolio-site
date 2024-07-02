// import { projects } from '../data/data'
import Projects from './Projects'
import './Intro.css'

const Intro = () => {
    return (
      <div className="container-sm d-flex flex-column flex-wrap justify-content-sm-center my-3">
        <h3 className="fw-bold">Hello! I&apos;m Lila, and I have a huge passion for designing, particularly in UI/UX. </h3>
        <p className="lead">With years of experience in frontend development, I&apos;ve honed my skills to create visually appealing, user-friendly, and responsive websites. I&apos;ve developed several projects on my own, showcasing my expertise and creativity. Explore my portfolio to see the projects I&apos;ve brought to life and get a glimpse of my design and development journey.</p>
        <a href="https://drive.google.com/file/d/1BMcv97j8cXZx4kntfjLF6UvIyy6CzO6O/view" className="btn btn-secondary">Download my Portfolio</a>
        {/* <div className="flex flex-wrap">
          {projectList}
        </div> */}
        <Projects />
      </div>
    )
  }
  
  export default Intro
  