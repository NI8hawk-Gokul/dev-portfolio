import {
Code2,
GraduationCap,
Briefcase,
Award,
Rocket,
Heart,
Coffee,
BookOpen,
Zap,
Database,
Server,
Cloud,
Mail,
MapPin,
Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import Project_Image_1 from "../assets/images/project-1.jpg";
import Project_Image_2 from "../assets/images/project-2.jpg";
import Project_Image_3 from "../assets/images/project-3.jpg";
import Project_Image_4 from "../assets/images/project-4.jpg";
import Project_Image_5 from "../assets/images/project-5.jpg";
import Project_Image_6 from "../assets/images/project-6.jpg";
 


export const SKILLS_CATEGORY = [
  { 
    title: "Frontend",
    icon: Code2,
    description: "Crafting beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "Typescript", level: 90, color: "bg-blue-600" },
      { name: "Next.js", level: 88, color: "bg-gray-800" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "Framer Motion", level: 80, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description: "Building robust, server-side solutions",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-500" },
      { name: "Express.js", level: 88, color: "bg-gray-700" },
      { name: "Python", level: 85, color: "bg-yellow-500" },
      { name: "GraphQL", level: 80, color: "bg-pink-600" },
      { name: "REST APIs", level: 92, color: "bg-orange-500" },
    ],
 },
 {
    title: "Database",
    icon: Database,
    description: "Managing and optimizing data storage",
    skills: [
       { name: "MongoDB", level: 88, color: "bg-green-600" },
       { name: "MongoDb", level: 85, color: "bg-blue-700" },
       { name: "Redis", level: 80, color: "bg-red-500" },
       { name: "Prisma", level: 82, color: "bg-indigo-600" },
       { name: "Firebase", level: 78, color: "bg-yellow-600" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
       { name: "Docker", level: 82, color: "bg-blue-600" },
       { name: "AWS", level: 78, color: "bg-orange-600" },
       { name: "Vercel", level: 90, color: "bg-gray-900" },
       { name: "Git", level: 95, color: "bg-orange-700" },
       { name: "CI/CD", level: 75, color: "bg-purple-600" },
    ],
  },
];

export const TECH_STACK = [
  "JavaScript",
  "HTML",
  "CSS",
  "Sass",
  "Webpack",
  "Vite",
  "Jest",
  "Cypress",
  "Figma",
  "Adobe XD",
  "Notion",
  "Slack",
];

export const STATS = [
  { number: "8+", label: "Projects Completed" },
  { number: "3+", label: "Years Experience" },
  { number: "20+", label: "Technologies" },
  { number: "100%", label: "Results" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Neuropick - centralized Review Platform",
    description:
      "Neuropick is an AI-powered full-stack platform that analyzes user emotions and delivers intelligent, personalized chatbot interactions in real time",
    image: Project_Image_1,
    tags: ["React", "Node.js", "AI"],
    liveUrl: "#",
    githubUrl: "https://github.com/NI8hawk-Gokul/Nuropick",
    featured: true,
    category: "AI",
  },
  {
    id: 2,
    title: "Real-Time Racing Track",
    description:
      "Built an immersive VR-based racing track simulator in Unity that enables users to virtually experience race environments, analyze track layouts, and improve preparation before real-world racing events.",
    image: Project_Image_2,
    tags: ["Unity", "VR", "C#", "Simulation"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "VR/AR",
  },
  {
    id: 3,
    title: "Stock Price Prediction using CNN",
    description:
      "Built an AI-driven stock market forecasting system using Convolutional Neural Networks (CNN) to analyze historical financial data, detect market trends, and generate accurate future price predictions.",
    image: Project_Image_3,
    tags: ["Python", "TensorFlow", "Keras", "Machine Learning", "CNN"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
    category: "AI/ML",
  },
  {
    id: 4,
    title: "Blockchain Hashing & Verification System",
    description:
        "Built a blockchain-powered security system utilizing SHA-256 hashing algorithms to maintain secure, decentralized, and immutable data records with enhanced integrity verification.",
    image: Project_Image_4,
    tags: ["Blockchain", "Python", "Cryptography", "SHA-256", "Web3"],
    liveUrl: "#",
    githubUrl: "https://github.com/NI8hawk-Gokul/hashing",
    featured: true,
    category: "Blockchain",
  },
  {
  id: 5,
  title: "AI Emotional Chatbot",
  description:
    "Built an intelligent emotional chatbot using React, FastAPI, and NLP models to analyze user emotions and provide adaptive, human-like conversational responses with real-time emotion detection.",
  image: Project_Image_5,
  tags: ["React", "FastAPI", "Hugging Face", "OpenAI API", "Python"],
  liveUrl: "#",
  githubUrl: "https://github.com/NI8hawk-Gokul/emotion-chatbot",
  featured: true,
  category: "AI/ML",
 },
 {
  id: 6,
  title: "AI Air Cargo Tracking & Logistics Platform",
  description:
    "Built an enterprise-grade AI-powered air cargo tracking platform using React, Express.js, and AI-driven logistics intelligence to provide real-time shipment monitoring, AWB tracking, OCR document parsing, geofencing alerts, and smart operational management.",
  image: Project_Image_6,
  tags: [
    "React 19",
    "Express.js",
    "Leaflet",
    "AI",
    "OCR",
    "Logistics"
  ],
  liveUrl: "https://dev-portfolio-five-nu.vercel.app",
  githubUrl: "https://github.com/NI8hawk-Gokul/AI-AIR-CARGO-TRACKING",
  featured: true,
  category: "AI/Logistics",
},
];

export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started Coding Journey",
    description:
        "Began learning programming languages and building small projects to develop foundational coding skills.",
    icon: GraduationCap,
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "Started B.Tech in AI & Data Science",
    description:
      "Began my undergraduate journey in Artificial Intelligence & Data Science at DMI College of Engineering while exploring programming fundamentals and web development.",
    icon: GraduationCap,
    color: "bg-blue-500",
  },
 {
    year: "2023",
    title: "Explored Full-Stack Development",
    description:
      "Learned frontend and backend technologies including React, Node.js, and databases while building responsive web applications and mini projects.",
    icon:Code2,
    color: "bg-green-500",
  },
  {
    year: "2024",
    title: "Senior Assistant Internship at Flipkart & Quess Corp",
    Company: "Flipkart & Quess Corp Ltd.",
    description:
        "Completed an internship as a Senior Assistant at Flipkart & Quess Corp Ltd. where I managed employee task assignments, company stock handling, attendance tracking, and report maintenance. This experience strengthened my leadership, organizational, and team management skills while ensuring smooth workflow efficiency.",
    icon: Briefcase,
    color: "bg-purple-500",
  },
  {
    year: "2025",
    title: "Web Development Internship at ZTECH10R SYS",
    Company: "ZTECH10R SYS PVT LTD",
    description:
        "Completed a web development internship at ZTECH10R SYS PVT LTD  where I enhanced my skills in front-end design, back-end logic implementation, and database management. I analyzed user experience data, prepared reports on industry best practices, managed multiple projects, coordinated with cross-functional teams, and ensured timely delivery of project milestones.",
    icon:Code2,
    color: "bg-orange-500",
  },
  {
    year: "2026",
    title: "Software Developer Internship",
    Company: "WWL PVT LTD Present",
    description:
        " Currently working as a Software Developer Intern at a worldwide logistics company, gaining hands-on experience in real-world software development and scalable application development.",
    icon: Rocket,
    color: "bg-red-500",
  },
];

export const PASSIONS = [
  {
    icon: Heart,
    title: "Passion for Coding",
    description: "I am deeply passionate about coding and technology, constantly seeking to learn and create innovative solutions that make a positive impact on the world.",   
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },      
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always eager to learn new technologies and improve my skills",    
  },
];

export const SOCIAL_LINKS = [
    {
        name: "GitHub",
        icon: FiGithub,
        url: "https://github.com/NI8hawk-Gokul",
        color: "hover:text-gray-400",
        bgColor: "hover:bg-gray-800",
    },
    {
        name: "LinkedIn",
        icon: FiLinkedin,
        url: "www.linkedin.com/in/gokul-k-344656300/",
        color: "hover:text-blue-400",
        bgColor: "hover:bg-blue-500/10",
    },
    {
        name: "X",
        icon: FiTwitter,
        url: "https://x.com/Gokul44637839",
        color: "hover:text-gray-300",
        bgColor: "hover:bg-gray-500/10",
    },
    {
        name: "Email",
        icon: Mail,
        url: "mailto:gokulk.ai.official@gmail.com",
        color: "hover:text-green-400",
        bgColor: "hover:bg-green-500/10",
    },
 ];

 export const CONTACT_INFO = [
    {
       icon: MapPin,
       label: "Location",
       value: "Chennai, India",
    },
    {
       icon: Mail,
       label: "Email",
       value: "gokulk.ai.official@gmail.com",
    },
    {
       icon: Phone,
       label: "Phone",
       value: "+91 6374380017",
    }, 
 ];