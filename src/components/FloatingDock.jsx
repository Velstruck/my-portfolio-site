import { Home, Mail, Github, Linkedin, Twitter, Sun, Moon } from "lucide-react"
import { Separator } from "./ui/separator"
import { Toggle } from "./ui/toggle"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "./ui/hover-card"

const IconLink = ({ href, icon: Icon, label }) => {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:text-primary transition-colors"
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
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
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
        href="https://github.com/yourusername"
        icon={Github}
        label="GitHub"
      />
      <IconLink
        href="https://linkedin.com/in/yourusername"
        icon={Linkedin}
        label="LinkedIn"
      />
      <IconLink
        href="https://twitter.com/yourusername"
        icon={Twitter}
        label="Twitter"
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
