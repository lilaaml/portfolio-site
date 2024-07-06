// import { projects } from '../data/data'
import './Intro.css'

const Intro = () => {
    return (
      <div className="container-sm d-flex flex-column flex-wrap justify-content-sm-center mt-5 col-md-6">
        <h3 className="display-6 fw-bold">Hello! I&apos;m <span className="highlight">Lila</span></h3>
        <p className="lead">I&apos;m a computer science freshgraduate with a huge passion for frontend development. I always ensure the web applications that I design and develop to be responsive, visually appealing, and user-friendly. Explore my portfolio to see the projects I&apos;ve worked on!</p>
        <div className="download-btn d-flex flex-wrap justify-content-center">
          <a href="https://drive.google.com/file/d/1BMcv97j8cXZx4kntfjLF6UvIyy6CzO6O/view" className="cv-btn btn mx-2">Download CV</a>
          <a href="https://drive.google.com/file/d/1BMcv97j8cXZx4kntfjLF6UvIyy6CzO6O/view" className="portfolio-btn btn btn-secondary mx-2">Download Portfolio</a>
        </div>
      </div>
      // <div className="container-sm my-5 justify-content-sm-center">
      //   <div className="lc-block">
      //     <div contentEditable="rich">
      //       <h4 className="display-5">Hello, I&apos;m Lila</h4>
      //     </div>
      //   </div>
      //   <div className="lc-block col-md-8">
      //     <div contentEditable="rich">
      //       <p className="lead">I&apos;m a freshgraduate with a huge passion for designing, UI & UX alike. I&apos;ve developed several projects with visually appealing, user-friendly, and responsive websites on my own. Explore my portfolio to see the projects I&apos;ve brought to life and get a glimpse of my design and development journey.</p>
      //     </div>
      //   </div>
      //   <div className="download-btn d-flex flex-wrap justify-content-center">
      //     <a href="/" className="btn btn-dark mx-2" role="button">Download CV</a>
      //     <a href="/" className="btn btn-dark mx-2" role="button">Download Portfolio</a>
      //   </div>
      // </div>
    )
  }
  
  export default Intro
  