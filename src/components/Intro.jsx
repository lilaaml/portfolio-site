import cv from '../assets/CV.pdf'
import portfolio from '../assets/Portfolio.pdf'
import './Intro.css'

const Intro = () => {
    return (
      <div id="intro" className="container-sm d-flex flex-column flex-wrap justify-content-sm-center mt-5 col-md-6">
        <h3 className="display-6 fw-bold">Hey there, I&apos;m <span className="highlight">Lila</span></h3>

        <p className="lead">I&apos;m an aspiring frontend developer. I pour my creativity into creating responsive and visually appealing UI/UX designs for web applications. Explore my portfolio to see the projects I&apos;ve worked on!</p>

        <div className="download-btn d-flex flex-wrap justify-content-center">
          <a href={cv} download="CV" className="cv-btn btn mx-2 my-2">Download CV</a>
          <a href={portfolio} download="Portfolio" className="portfolio-btn btn btn-secondary mx-2 my-2">Download Portfolio</a>
        </div>
      </div>
    )
  }
  
  export default Intro
  