"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { useInView } from "react-intersection-observer"

const projectsData = [
  {
    id: 1,
    title: "Smart Hospital Management System",
    description:
      "The Hospital Management System optimizes queuing and resource availability to improve patient care. It integrates with city-wide healthcare modules for real-time data sharing, enhancing patient flow, bed management, and overall healthcare efficiency.",
    image: "/images/hms.png",
    link: "https://sihhospital.vercel.app/",
    github: "https://github.com/abhisek2004/Minor-Project-II-Smart-Hospital-Management-System.git",
    tags: [ "Html5", "CSS5", "Javascript", "React", "TypeScript", "Python", "Flask", "MongoDB"],
  },
  {
    id: 9,
    title: "Study Notion",
    description: "Study Notion is a learning platform with user authentication, course creation, student enrollment, and progress tracking. It supports quizzes, assignments, and secure payments via Razorpay. It helps users find courses, and instructor dashboards for performance and income tracking.",
    image: "/images/study.png",
    link: "https://study-notion-alpha-two.vercel.app/",
    github: "#",
    tags: ["API", "Node.js", "Express.js" , "Mongodb" , "React" , "Tailwind CSS"],
  },
  {
    id: 3,
    title: "Smart School Management System",
    description:
      "The Result Management System efficiently handles student results with a user-friendly interface. It features role-based access where teachers add attendance and marks, students view results, notices, and submit complaints, admin manages users, subjects, and records.",
    image: "/images/hd.png",
    link: "https://smart-school-management-system.vercel.app/",
    github: "https://github.com/abhisek2004/PRG_3.git",
    tags: ["API", "Node.js", "Express.js" , "Mongodb" , "React" , "Tailwind CSS"],
  },
  {
    id: 4,
    title: "Edu-Versity-Internship MERN",
    description: "I created a tribute page for Dr. APJ Abdul Kalam which helped improve my front-end development skills while honoring his legacy. I also developed a result management system to efficiently manage and display student results, ensuring a smooth and user-friendly experience.",
    image: "/images/result_tribute.png",
    link: "https://github.com/abhisek2004/Edu-Versity-Internship-.git",
    github: "https://github.com/abhisek2004/Edu-Versity-Internship-.git",
    tags: ["JavaScript", "API", "CSS","Html" , "Node.js", "Express.js" , "React"],
  },
  {
    id: 5,
    title: "1Stopai-Internship Web Development",
    description: "I completed a front-end web development internship at 1Stop, building a responsive company website clone, a JavaScript-based calculator, and a to-do list for task management. I also worked on optimizing UI/UX, improving performance, and implementing interactive features for a seamless user experience.",
    image: "/images/1stopai_wd.png",
    link: "https://github.com/abhisek2004/Internship--WD.git",
    github: "https://github.com/abhisek2004/Internship--WD.git",
    tags: ["Html5", "CSS5", "Javascript"],
  },
  {
    id: 2,
    title: "Heart Failure",
    description:
      "The Predictive Modeling for Heart Failure project aims to leverage machine learning to identify high-risk patients and facilitate early interventions. By analyzing anonymized patient data, the model provides healthcare professionals with valuable insights to improve patient outcomes.",
    image: "/images/heart.png",
    link: "https://heart-failure-prg.streamlit.app/",
    github: "https://github.com/abhisek2004/Minor-Project-I-Heart-Failure.git",
    tags: ["Pandas", "NumPy", "Scikit-learn","Python" ,"Matplotlib" ,"Seaborn" ,"Streamlit"],
  },
  {
    id: 6,
    title: "1Stopai-Internship Data Science",
    description: "I worked on Credit EDA for financial data analysis, Hate Speech Detection for filtering harmful content, and SMS-Spam Detection for identifying spam messages.",
    image: "/images/1stopai_ds.png",
    link: "https://github.com/abhisek2004/-1Stop-Internship-DS.git",
    github: "https://github.com/abhisek2004/-1Stop-Internship-DS.git",
    tags: ["Pandas", "NumPy", "Scikit-learn","Python" ,"Matplotlib" ,"Seaborn" ,"Streamlit"],
  },
  {
    id: 7,
    title: "Dine and Dash Restaurant Booking",
    description: "The Restaurant Booking Web Application: Dine and Dash is designed to simplify the process of making restaurant reservations, providing an intuitive interface for users to book tables easily.",
    image: "/images/hotel.png",
    link: "https://learning-project-2.vercel.app/",
    github: "https://github.com/abhisek2004/LEARNING-PROJECT-2.git",
    tags: ["Html5", "CSS5", "Javascript" , "Node.js", "Express.js" , "Mongodb"],
  },
  {
    id: 8,
    title: "Java & Dsa",
    description: "In-depth exploration of various fundamental and advanced topics in Java programming and data structures, significantly enhancing my coding skills and problem-solving abilities. ",
    image: "/images/java_dsa.png",
    link: "https://dsamasteryhub.vercel.app/",
    github: "https://github.com/abhisek2004/Java-Dsa-Apna-College.git",
    tags: ["JAVA", "DSA" , "OOP", "Data Structures", "Algorithms" ],
  },
  {
    id: 9,
    title: "Delta MERN Development",
    description: "I am focusing on full-stack web development, using HTML, CSS, and JavaScript for the frontend, MongoDB for database management, Express.js for the backend, React.js for UI, and Node.js for server-side programming.",
    image: "/images/mern_study.png",
    link: "https://github.com/abhisek2004/Delta-Full-Stack-Web-Development.git",
    github: "https://github.com/abhisek2004/Delta-Full-Stack-Web-Development.git",
    tags: ["Html5", "CSS5", "Javascript" , "Node.js", "Express.js" , "Mongodb" , "Jwt" , "Bootstrap"],
  },
  {
    id: 10,
    title: "MERN Stack Project ",
    description: "This MERN Stack project is designed to provide users with a seamless experience for . It combines a powerful back-end with a dynamic front-end to create a robust web application.",
    image: "/images/mern_prg.png",
    link: "https://github.com/abhisek2004/MERN-STACK-PROJECT.git",
    github: "https://github.com/abhisek2004/MERN-STACK-PROJECT.git",
    tags: ["Html5", "CSS5", "Javascript" , "Node.js", "Express.js" , "Mongodb" , "Jwt" , "Bootstrap"],
  },
  {
    id: 11,
    title: "HTML-CSS-Javascript Project",
    description: "Passionate about web development. Worked on frontend projects using HTML, CSS, and JavaScript to create responsive and interactive user interfaces. Gaining experience in React.js for dynamic UI development and integrating APIs for enhanced functionality.",
    image: "/images/js_prg.png",
    link: "https://github.com/abhisek2004/Html-Css-Javascript-Project.git",
    github: "https://github.com/abhisek2004/Html-Css-Javascript-Project.git",
    tags: ["Html5", "CSS5", "Javascript" ],
  },
  {
    id: 12,
    title: "Reach Me Social Linkup",
    description: "The Reach Me is designed to foster connections among individuals, providing an interactive environment for users to communicate and engage.",
    image: "/images/reach_me.png",
    link: "https://github.com/abhisek2004/LEARNING-PROJECT-1.git",
    github: "https://github.com/abhisek2004/LEARNING-PROJECT-1.git",
    tags: ["Html5", "CSS5", "Javascript" , "Php"],
  },
  {
    id: 13,
    title: "GIETU Study Materials",
    description: "This website is for all Computer Science & Engineering students at GIET University, Gunupur, offering study materials and placement resources for every semester.",
    image: "/images/giet.png",
    link: "https://gietu-study.vercel.app/",
    github: "#",
    tags: ["Html5", "CSS5", "Javascript" , "Php"],
  },
  {
    id: 14,
    title: "Web Development dot-1.0",
    description: "This repository serves as a complete roadmap for mastering Full Stack Web Development with industry-grade projects, from scratch to deployment! ",
    image: "/images/mern_study.png",
    link: "https://github.com/abhisek2004/Web-Development-Master-dot-1.0-Batch.git",
    github: "https://github.com/abhisek2004/Web-Development-Master-dot-1.0-Batch.git",
    tags: ["Html5", "CSS5", "Javascript" , "Php"],
  },
]

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <section id="portfolio" ref={ref} className="py-20">
      <div className="container px-4">
        <div className="mb-12 text-center">
          <h2 className="font-poppins text-lg font-medium text-primary">My Works</h2>
          <h3 className="mt-2 font-poppins text-3xl font-bold md:text-4xl">See My Works Which Will Amaze You!</h3>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            I develop high-quality applications that serve for the long-term. Well-documented, clean, and elegant
            interfaces help any non-technical clients understand and use the products easily.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <Card
              key={project.id}
              className={cn(
                "project-card overflow-hidden border-0 shadow-lg transition-all duration-700",
                isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0",
              )}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-48 w-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="mb-2 font-poppins text-xl font-bold">{project.title}</h4>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between border-t p-6 pt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                  <span>Code</span>
                </a>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span>Live Demo</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

