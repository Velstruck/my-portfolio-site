import { Badge } from "../ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card"

const ProjectCard = ({ title, description, image, techStack, repoLink, liveLink }) => {
  return (
    <Card className="group transition-all duration-300 hover:shadow-lg">
      <CardHeader>
        <div className="aspect-video w-full overflow-hidden rounded-lg mb-4">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {techStack.map((tech, index) => (
            <Badge key={index} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>
        <div className="flex gap-2">
          <Badge asChild variant="secondary" className="hover:bg-primary hover:text-primary-foreground">
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              Repository
            </a>
          </Badge>
          {liveLink && (
          <Badge asChild variant="secondary" className="hover:bg-primary hover:text-primary-foreground">
            <a href={liveLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          </Badge>
        )}
        </div>
      </CardContent>
    </Card>
  )
}

const Projects = () => {
  const projects = [
    {
      title: "TeamSync: A Team and Project Management App ",
      description: " A multi-tenancy platform with features like Google Sign-In, workspace management, project management, task CRUD, role-based permissions, invite system, filters, search, analytics, pagination, cookie session management, and more.",
      image: "/underconstruction.png",
      techStack: ["React", "Typescript","Tailwind", "Shadcn UI","Tanstack/React Query","Nuqs","Zustand","Axios", "MongoDB", "NodeJS", "Express", "Google OAUTH"],
      repoLink: "https://github.com/Velstruck/teamsync-app",
      
    },
    {
      title: "VBLOG: A Blogging Platform",
      description: "A Blogging Platform that allows users to create, read, comment and like blogs. Users can search for their favourite categories of blogs. There are Admin privileges for managing the platform as well.",
      image: "/mernblog.png",
      techStack: ["React", "Tailwind", "Shadcn UI", "MongoDB", "Firebase", "NodeJS", "Express", "Cloudinary"],
      repoLink: "https://github.com/Velstruck/mern-blog-app",
      liveLink: "https://mern-blog-app-lvln.vercel.app"
    },
    {
      title: "Insight Income: An Expense Tracker",
      description: "​Insight Income is a web-based application designed to provide users with a comprehensive analysis of their income data. It offers interactive visualizations and insights to help users understand their income patterns and make informed financial decisions",
      image: "/insightincome.png",
      techStack: ["React", "Tailwind", "ReCharts", "MongoDB", "NodeJS", "Express","xlsx", "Cloudinary"],
      repoLink: "https://github.com/Velstruck/insight-income",
      liveLink: "https://insight-income.vercel.app"
    },
    {
      title: "Stock Talk: Real-Time Stock Market Analytics",
      description: "This project is a real-time stock market analytics application that provides users with up-to-date information on stock prices, trends, and news. It utilizes the Alpha Vantage API to fetch stock data and presents it in an intuitive and user-friendly interface.",
      image: "/stocktalk.png",
      techStack: ["React", "Tailwind", "Shadcn UI", "MongoDB", "Alpha Vantage", "NodeJS", "Express"],
      repoLink: "https://github.com/Velstruck/stock-talk",
      liveLink: "https://stock-talk-web.vercel.app"
    },
    {
      title: "CrowdFunding Platform: Using Web3",
      description: "This project aims to create a secure and user-friendly crowdfunding platform leveraging the power of Web3 and blockchain technology.",
      image: "/crowdfunding.png",
      techStack: ["NextJS", "Tailwind", "Solidity", "Hardhat", "React", "NodeJS", "Blockchain"],
      repoLink: "https://github.com/Velstruck/crowdfunding-web3-app",
    },
    {
      title: "Event Manager App",
      description: "This is an Event Management Application that allows users to create, manage, and participate in events. The application provides a user-friendly interface to handle all event-related activities",
      image: "/eventmanager.png",
      techStack: ["React","Tailwind", "Node.js", "Firebase"],
      repoLink: "https://github.com/Velstruck/event-manager-app",
      liveLink: "https://manage-event-app.vercel.app"
    },
    {
      title: "Story Forge",
      description: "A blogging platform allowing users to create and read blogs",
      image: "/storyforge.png",
      techStack: ["React","Redux","Tailwind", "Node.js", "Appwrite","TinyMCE"],
      repoLink: "https://github.com/Velstruck/story-forge",
      liveLink: "https://story-forge.netlify.app"
    },
    {
      title: "GameUrge: Discover Games",
      description: "A modern, interactive game search application that lets users discover and explore video games using the IGDB API. Features a beautiful UI with gaming-themed animations and real-time search capabilities.",
      image: "/gameurge.png",
      techStack: ["React", "Framer-Motion", "Tailwind","Node.js", "IGDB API"],
      repoLink: "https://github.com/Velstruck/game-urge-app",
      liveLink: "https://gameurge.vercel.app/"
    },
    {
      title: "MovieUrge: Discover Movies",
      description: "This project is a movie database application built using React. It allows users to search for movies, view movie details, and see trending movies. The application leverages several technologies and APIs to provide a rich user experience.",
      image: "/movieurge.png",
      techStack: ["React", "Tailwind","Node.js", "TMDB API","Appwrite"],
      repoLink: "https://github.com/Velstruck/movie-db-app",
      liveLink: "https://movieurge.netlify.app/"
    },
    {
      title: "Celebrity Predictor",
      description: "This project, utilizing the VGGFace model, exemplifies the cutting-edge application of image processing and deep learning in the entertainment industry and highlights the potential of AI in face recognition, paving the way for future innovations in image analysis and the entertainment sector.",
      image: "/celebrity.png",
      techStack: ["Python", "MySQL","TensorFlow", "Scikit-learn","OpenCV","Streamlit","Keras","MTCNN"],
      repoLink: "https://github.com/Velstruck/ol-celeb",
    },
    
  ]

  return (
    <section className="py-20 px-4 md:px-8 lg:px-16">
      <h2 className="text-3xl font-bold mb-4">My Projects</h2>
      <p className="text-muted-foreground mb-8">
        Check out my latest work. I've worked on a variety of projects, from simple websites to complex applications. Here are a few of my favorites.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
      <p className="mt-10 text-muted-foreground mb-8">
        For more checkout:<span> <a href="https://github.com/Velstruck" target="_blank" className="text-primary hover:underline">Github</a></span>
      </p>
    </section>
  )
}

export default Projects
