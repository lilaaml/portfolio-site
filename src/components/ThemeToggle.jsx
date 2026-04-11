import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'
import { Button } from './ui/button'

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
      
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
      return systemPreference ? 'dark' : 'light'
    }
    return 'light'
  })

  useEffect(() => {
    const root = window.document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light')
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={toggleTheme}
      className="fixed top-6 right-6 z-50 rounded-full w-12 h-12 bg-background/80 backdrop-blur-md border-border/50 shadow-lg hover:shadow-primary/20 transition-all duration-300"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon className="h-5 w-5 transition-all text-slate-700" />
      ) : (
        <Sun className="h-5 w-5 transition-all text-yellow-400" />
      )}
    </Button>
  )
}

export default ThemeToggle
