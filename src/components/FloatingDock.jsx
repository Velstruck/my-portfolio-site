import { Home, Mail, Github, Linkedin, Twitter, Sun, Moon } from "lucide-react"
import { Separator } from "./ui/separator"
import { Toggle } from "./ui/toggle"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card"

const IconLink = ({ href, icon: Icon, label, onClick, target }) => {
  const handleClick = (e) => {
    if (onClick) {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href={href}
          rel="noopener noreferrer"
          target={target}
          className="p-2 hover:text-primary transition-colors"
          onClick={handleClick}
        >
          <Icon size={20} />
        </a>
      </HoverCardTrigger>
      <HoverCardContent className="w-auto">
        <p className="text-sm">{label}</p>
      </HoverCardContent>
    </HoverCard>
  )
}

const FloatingDock = ({ theme, setTheme }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact")
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-background/80 backdrop-blur-sm border rounded-full px-4 py-2 flex items-center gap-2 shadow-lg">
      <IconLink
        href="#"
        icon={Home}
        label="Home"
        onClick={scrollToTop}
      />
      <IconLink
        href="#contact"
        icon={Mail}
        label="Contact"
        onClick={scrollToContact}
      />
      <Separator orientation="vertical" className="h-6" />
      <IconLink
        href="https://github.com/Velstruck"
        icon={Github}
        label="GitHub"
        target="_blank"
      />
      <IconLink
        href="https://linkedin.com/in/vasudev7"
        icon={Linkedin}
        label="LinkedIn"
        target="_blank"
      />
      <IconLink
        href="https://x.com/velstruck"
        icon={Twitter}
        label="Twitter"
        target="_blank"
      />
      <Separator orientation="vertical" className="h-6" />
      <Toggle
        aria-label="Toggle theme"
        pressed={theme === "dark"}
        onPressedChange={(pressed) => setTheme(pressed ? "dark" : "light")}
      >
        {theme === "dark" ? <Moon size={20} /> : <Sun size={20} />}
      </Toggle>
    </div>
  )
}

export default FloatingDock
