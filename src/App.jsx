import Intro from './components/Intro'
import Projects from './components/Projects'
import Footer from './components/Footer'
import ThemeToggle from './components/ThemeToggle'

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans antialiased overflow-x-hidden flex flex-col items-center">
      <ThemeToggle />
      <Intro />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
