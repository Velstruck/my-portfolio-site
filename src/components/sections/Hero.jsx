import { Button } from "../ui/button"
import profileimage from "../../assets/profilepic.png"  

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-between px-4 md:px-8 lg:px-16 py-20">
      <div className="flex-1">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hi, I am Vasudev 🫸
        </h1>
        <p className="text-lg md:text-xl mb-6 text-muted-foreground max-w-2xl">
          I try to write code that works🫡. 
          <p>
            A passionate software developer focused on creating intuitive and efficient web applications.          
          </p>
        </p>
        <Button asChild variant="outline" className="hover:bg-primary hover:text-primary-foreground">
          <a href="https://drive.google.com/file/d/1lHHFGNfU3hhYqwIlQ2rB2jXnnUjjjMjo/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </Button>
      </div>
      <div className="hidden md:block">
        <div className="w-48 h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden border-4 border-primary">
          <img
            src={profileimage}
            alt="Vasudev"
            className="w-full h-full object-cover filter brightness-100 hover:brightness-90 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
