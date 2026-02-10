export type Link = {
  label: string;
  href: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  timeframe: string;
  highlights: string[];
  tags?: string[];
  links?: Link[];
};

export type ProjectItem = {
  name: string;
  tagline: string;
  stack: string[];
  problem: string;
  interesting: string;
  links?: { code?: string; demo?: string; caseStudy?: string };
  featured?: boolean;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type InterestItem = {
  title: string;
  description: string;
  icon:
    | "spark"
    | "accessibility"
    | "users"
    | "dance"
    | "community"
    | "clarity";
};

const nav: Link[] = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const experience: ExperienceItem[] = [
  {
    company: "NeuralSeek",
    role: "Agentic AI Builder Intern, Accessibility Evaluation Agent",
    location: "Remote",
    timeframe: "Jun 2025 – Aug 2025",
    tags: ["Agentic AI", "Accessibility", "Evaluation"],
    highlights: [
      "Integrated LLMs into a multi-agent workflow for natural language understanding, decision-making, and scalable deployment.",
      "Built an accessibility evaluation agent that analyzes design documents, screenshots, and code to flag WCAG/ADA issues.",
      "Coordinated agents with routing logic and shared knowledge to reduce review time and improve consistency.",
    ],
    links: [
      { label: "View Demo", href: "https://youtu.be/50ygIdbjuH4?si=Ex7DdlRz3ZQ8ZsFE" },
    ],
  },
  {
    company: "Carnegie Mellon University, School of Computer Science (Variability Lab)",
    role: "Research Assistant, GRACE Project",
    location: "Pittsburgh, PA",
    timeframe: "Apr 2025 – Present",
    tags: ["User Studies", "Accessibility", "Systems"],
    highlights: [
      "Prototyped accessible systems to support blind and low-vision UI/UX designers collaborating with developers (screen-reader compatibility, adaptive interface behavior).",
      "Conducted 27 user studies and analyzed 90+ hours of multimodal interaction data.",
      "Built a scalable coding framework that reduced analysis time by 50% and supported research on gaze- and gesture-based AI systems.",
    ],
  },
  {
    company: "Carnegie Mellon University, ScottyLabs",
    role: "Back End Developer, Com-You-Nity",
    location: "Pittsburgh, PA",
    timeframe: "Sep 2025 – Present",
    tags: ["Backend", "REST APIs", "Node.js"],
    highlights: [
      "Develop backend services for a React-based community events platform, designing RESTful Node.js APIs (JSON) for event creation, search, filtering, and discovery.",
      "Collaborate with frontend developers and product stakeholders to define requirements, validate data contracts, and debug client–server interactions across the feature lifecycle.",
    ],
  },
];

const projects: ProjectItem[] = [
  {
    name: "King’s Closet",
    tagline: "A real-time outfit evaluation tool with camera input, interactions, and color-based scoring.",
    stack: ["Python", "OpenCV", "Scikit-learn", "KMeans", "Computer Vision"],
    problem:
      "Evaluating outfit compatibility in real time is non-trivial: you need reliable color extraction, stable scoring rules, and interaction that doesn’t break under edge cases.",
    interesting:
      "Extracted dominant colors with KMeans + OpenCV, applied color harmony logic, and optimized data structures to keep outputs consistent and validated while users interact via camera + gestures/mouse.",
    featured: true,
    links: {
      code: "https://github.com/parishijainn/Kings_Closet",
      demo: "https://youtu.be/AO7PUn8GqX4",
    },
  },
  {
    name: "Context-Free Grammar Parser & Validator",
    tagline: "A Java-based parser that validates strings against user-defined context-free grammars.",
    stack: ["Java", "OOP", "Parsing", "Algorithms"],
    problem:
      "CFG parsing has tricky recursion and edge cases—small design mistakes make the system hard to extend and easy to break.",
    interesting:
      "Built clean abstractions across Parser/Rule components and applied recursive logic for predictable behavior, maintainable structure, and correctness-focused implementation.",
    featured: true,
    links: {
      code: "https://github.com/parishijainn/java-grammar-parser",
    },
  },
  {
    name: "Duolingo Learning Platform Database",
    tagline: "A BCNF-normalized database system for Duolingo-style learning workflows and analytics.",
    stack: ["PostgreSQL", "SQL", "Python", "BCNF Normalization", "Data Integrity"],
    problem:
      "Learning products need reliable progress tracking and analytics without compromising data integrity as requirements evolve.",
    interesting:
      "Designed BCNF schemas with DDL, triggers, and constraints; implemented analytics + operational workflows (leaderboards, study-plan evaluation, subscription deactivation) across 10 user-story demos.",
    featured: true,
    links: {
      code: "https://github.com/parishijainn/duolingo-learning-platform-db",
    },
  },
  {
    name: "Duquesne Incline Website Redesign",
    tagline: "An accessibility-first, mobile-first redesign of a public-facing landmark homepage.",
    stack: ["HTML", "CSS", "JavaScript", "jQuery", "Accessibility"],
    problem:
      "Public sites are often a visitor’s first touchpoint—poor hierarchy and accessibility failures create real friction for real people.",
    interesting:
      "Used semantic HTML and improved content hierarchy for usability; built a modular JS slideshow with DOM manipulation + timed transitions, emphasizing separation of concerns and maintainable frontend structure.",
    featured: true,
    links: {
      code: "https://github.com/parishijainn/WebDevProject-Duquesne-Incline-Website",
    },
  },
];

const skills: SkillGroup[] = [
  {
    title: "Languages",
    items: ["Java", "Python", "SQL", "JavaScript", "TypeScript", "C", "HTML/CSS", "R"],
  },
  {
    title: "Libraries + Tools",
    items: [
      "PyTorch",
      "TensorFlow",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Git",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
    ],
  },
  {
    title: "Systems",
    items: [
      "Object-Oriented Design",
      "Backend services",
      "Microservices",
      "REST/JSON APIs",
      "Linux/UNIX",
      "SDLC",
      "Cloud concepts",
    ],
  },
];

const contactLinks: Link[] = [
  { label: "Email", href: "mailto:parishij@andrew.cmu.edu" },
  { label: "LinkedIn", href: "https://linkedin.com/in/parishi–jain" },
  { label: "GitHub", href: "https://github.com/parishijainn" },
];

const interests: InterestItem[] = [
  {
    title: "Accessibility & inclusive design",
    description: "Building for real people with thoughtful defaults and WCAG-aware decisions.",
    icon: "accessibility",
  },
  {
    title: "Human-centered systems",
    description: "Reliability plus empathy: tools that behave predictably under real-world constraints.",
    icon: "users",
  },
  {
    title: "Clarity as a product principle",
    description: "Legible hierarchy, fewer surprises, and interfaces that feel empowering.",
    icon: "clarity",
  },
  {
    title: "Dance (Kathak)",
    description: "A long-term creative practice—discipline, storytelling, and performance under pressure.",
    icon: "dance",
  },
  {
    title: "Community-building",
    description: "Student orgs and spaces that make it easier to learn, ship, and grow together.",
    icon: "community",
  },
];

export const site = {
  name: "Parishi Jain",
  roleLine: "Building thoughtful systems at the intersection of AI, product, and data.",
  intro:
    "I’m a CMU Information Systems student (Software Engineering minor) who likes turning ambiguous problems into reliable systems. I’m especially interested in agentic AI and accessibility—how we evaluate quality, reduce friction for users, and ship features that hold up in real-world conditions.",
  locationLine: "Carnegie Mellon University • Information Systems • Pittsburgh, PA",
  nav,
  ctas: {
    primary: { label: "View Projects", href: "#projects" },
    resume: { label: "Resume", href: "/resume" },
    contact: { label: "Contact", href: "#contact" },
  },
  about: {
    title: "About",
    body: [
      "I’m drawn to work where product decisions and systems design are inseparable: define the right problem, then build the infrastructure and interfaces that make the solution dependable.",
      "Through research and internships, I’ve focused on accessibility and agentic AI—how tools behave under ambiguity, how we make evaluation consistent, and how we build experiences that work for more people.",
      "I work best in early-stage, iterative environments: align on goals, make crisp tradeoffs, and improve quickly with real feedback.",
    ],
  },
  beyondWork: {
    title: "Beyond Work",
    items: interests,
  },
  experience,
  projects,
  skills,
  contact: {
    title: "Contact",
    closing:
      "If you’re building something thoughtful—especially in AI, data, or product—I'd love to connect.",
    links: contactLinks,
  },
} as const;

