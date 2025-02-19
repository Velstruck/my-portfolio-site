import { ThemeProvider, useTheme } from "./components/ThemeProvider"
import FloatingDock from "./components/FloatingDock"
import Hero from "./components/sections/Hero"
import Experience from "./components/sections/Experience"
import Education from "./components/sections/Education"
import Skills from "./components/sections/Skills"
import Projects from "./components/sections/Projects"
import Contact from "./components/sections/Contact"

function Main() {
  const { theme, setTheme } = useTheme()

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto">
        <Hero />
        <Experience />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <FloatingDock theme={theme} setTheme={setTheme} />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  )
}

export default App
