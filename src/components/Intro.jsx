import cv from '../assets/CV.pdf'
import portfolio from '../assets/Portfolio.pdf'
import { Button } from "@/components/ui/button"

const Intro = () => {
  return (
    <section id="intro" className="container min-h-screen flex flex-col justify-center items-center py-20 px-4 w-full pt-32">
      <div className="max-w-3xl text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6 mt-16">
          Hey there, I&apos;m <span className="text-primary">Lila</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-[600px] mb-10 leading-relaxed">
          Technical professional bridging software engineering and risk management. I manage the full lifecycle of risk; from code-level vulnerabilities to business process integrity and regulatory compliance. Expert in leveraging this hybrid background for Application Security and Security Consulting.
        </p>
        <div className="flex flex-wrap gap-4 justify-center w-full">
          <Button asChild size="lg">
            <a href={cv} download="CV">Download CV</a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a href={portfolio} download="Portfolio">Download Portfolio</a>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Intro
