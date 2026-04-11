import { projects } from '../data/data'
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

const Projects = () => {
  return (
    <section id="projects" className="container py-24 w-full">
      <div className="flex flex-col items-center mb-12">
        <h2 className="text-3xl tracking-tight font-semibold text-center mt-3 mb-0">Featured Projects</h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card key={project.id} className="flex flex-col h-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle className="text-xl">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-4">
              <CardDescription className="text-base text-muted-foreground flex-1">
                {project.info}
              </CardDescription>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.techStack.map((tech, i) => (
                  <Badge key={i} variant="secondary" className="font-normal opacity-80 hover:opacity-100 transition-opacity">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mr-1.5" />
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex gap-3 pt-4 border-t border-border/20">
              {project.demoAvailable ? (
                <Button asChild variant="default" className="flex-1" size="sm">
                  <a href={project.demo} target="_blank" rel="noreferrer">
                    Live Demo <BsBoxArrowUpRight className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ) : (
                <Button variant="secondary" className="flex-1 opacity-50 cursor-not-allowed" size="sm" disabled>
                  Demo N/A
                </Button>
              )}
              <Button asChild variant="outline" className="flex-1" size="sm">
                <a href={project.sourceCode} target="_blank" rel="noreferrer">
                  Source Code <FaGithub className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects