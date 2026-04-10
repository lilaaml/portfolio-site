import cv from '../assets/CV.pdf'
import portfolio from '../assets/Portfolio.pdf'
import './Intro.css'

const Intro = () => {
  return (
    <div id="intro" className="container-sm d-flex flex-column flex-wrap justify-content-sm-center mt-5 col-md-6">
      <h3 className="display-6 fw-bold">Hey there, I&apos;m <span className="highlight">Lila</span></h3>

      <p className="lead">Technical professional bridging software engineering and risk management. I manage the full lifecycle of risk; from code-level vulnerabilities to business process integrity and regulatory compliance. Expert in
        leveraging this hybrid background for Application Security and Security Consulting.</p>

      <div className="download-btn d-flex flex-wrap justify-content-center">
        <a href={cv} download="CV" className="cv-btn btn mx-2 my-2">Download CV</a>
        <a href={portfolio} download="Portfolio" className="portfolio-btn btn btn-secondary mx-2 my-2">Download Portfolio</a>
      </div>
    </div>
  )
}

export default Intro
