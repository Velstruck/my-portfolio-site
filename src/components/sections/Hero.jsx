import { Button } from "../ui/button"
import { RainbowButton } from "../ui/rainbow-button"
import profileimage from "/profilepic.png"  

const Hero = () => {
  return (
    <section className="min-h-[80vh] flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-8 lg:px-16 py-8 md:py-10 gap-8">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Hi, I am Vasudev 🫸
        </h1>
        <p className="text-lg md:text-xl mb-6 text-muted-foreground max-w-2xl">
          I try to write code that works🫡. 
          <p>
            A passionate software developer focused on creating intuitive and efficient web applications.          
          </p>
        </p>
        <RainbowButton className="text-sm hover:scale-105 transition-all duration-300">
          <a href="https://drive.google.com/file/d/1t3StA1KYg1AryIekZmiIjiqhxWA4S50e/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </RainbowButton>
      </div>
      <div className="w-40 h-40 md:w-48 md:h-48 lg:w-64 lg:h-64">
        <div className="w-full h-full rounded-full overflow-hidden border-4 border-primary">
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
