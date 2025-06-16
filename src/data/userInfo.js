import {
  File,
  Github,
  Instagram,
  Linkedin,
  Mail,
  MessageCircle,
} from "lucide-react";

const personalInfo = {
  // personal info
  name: "Ahmed Omran",
  birthYear: "2001",
  phone: "+20 1030960225",
  email: "Omran.a.jr@gmail.com",
  location: {
    city: "Cairo",
    country: "Egypt",
  },
  role: "Designer & Developer",
  roles: ["Designer", "Developer", "FrontEnd Developer", "UI/UX Enthusiast"],
  status: "Available for Freelance Projects",

  // images
  images: {
    logo: "/images/favicon.png",
    avatar: "/images/My__img.jpg",
    avatarTop: "/images/My__img_top.jpg",
    storyImage: "/images/story1.jpg",
    ogImage: "/images/og-image.jpg",
  },

  // sitemap
  siteMap: ["home", "about", "projects", "contact"],
};

const educationAndSkills = {
  education: {
    university: {
      name: "Faculty of Commerce, Sadat University",
      degree: "Bachelor's Degree in Business Administration",
      period: "2019-2023",
    },
    courses: [
      {
        title: "The Ultimate React Course 2024: React, Next.js, Redux & More",
        provider: "Udemy",
        instructor: "Jonas Schmedtmann",
        completed: "2025",
      },
      {
        title: "The Complete JavaScript Course 2024: From Zero to Expert!",
        provider: "Udemy",
        instructor: "Jonas Schmedtmann",
        completed: "2024",
      },
    ],
  },

  skills: [
    {
      link: "#core-technologies",
      text: "Core Technologies",
      details: ["HTML", "CSS", "JavaScript"],
    },
    {
      link: "#css-frameworks",
      text: "CSS Frameworks",
      details: ["Tailwind CSS", "Bootstrap 5", "SASS/SCSS", "LESS"],
    },
    {
      link: "#framework",
      text: "Frameworks",
      details: ["React", "Redux", "React Router", "React Query"],
    },
    {
      link: "#api-integration",
      text: "API Integration",
      details: ["REST APIs", "Axios", "Fetch API", "JWT Authentication"],
    },
    {
      link: "#web-technologies",
      text: "Web Technologies",
      details: ["Responsive Design", "CSS Grid", "Flexbox", "SEO Optimization"],
    },
    {
      link: "#development-tools",
      text: "Development Tools",
      details: ["Git", "GitHub", "VS Code"],
    },
  ],
};

const socialMedia = {
  links: [
    {
      name: "Resume",
      icon: <File width="16px" height="16px" />,
      url: "/AhmedOmran_FrontendDeveloper_CV.pdf",
    },
    {
      name: "GitHub",
      icon: <Github width="16px" height="16px" />,
      url: "https://github.com/2ao1-1",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin width="16px" height="16px" />,
      url: "https://www.linkedin.com/in/ahmed-omran-2ao1/",
    },
    {
      name: "Instagram",
      icon: <Instagram width="16px" height="16px" />,
      url: "https://www.instagram.com/10.7.2ao1/",
    },
  ],

  contacts: [
    {
      name: "WhatsApp",
      icon: <MessageCircle width="16px" height="16px" />,
      url: "https://wa.me/201030960225",
    },
    {
      name: "Email",
      icon: <Mail width="16px" height="16px" />,
      url: "mailto:omran.a.jr@gmail.com",
    },
  ],
};

const biography = {
  shortBio: [
    `What started as a love for design and how things move on a screen quickly turned into a passion for building seamless, interactive digital experiences. I blend design with code to create interfaces that are intuitive, functional, and smooth.`,
    `If you're into thoughtful, engaging designs that make tech feel magical, you're in the right place.`,
  ],

  detailedStory: [
    "In a world filled with empty spaces and colors, there was a person named Ahmed Omran. At first, he had no idea that those sparks he saw in web designs would lead him to a deep love for both coding and design. He was drawn to shapes and colors, fascinated by how things moved across the screen. Little did he know, this simple curiosity would guide him into a world of codes and designs that not only looked beautiful but worked seamlessly as well.",

    `Over time, Ahmed discovered the magic of blending design with code. It wasn't just about making things look good—it was about making them feel right. He wanted to build websites that were not only visually appealing but also smart and responsive in ways that would leave users saying, "Wow, that's smooth!" And that's when his passion for creating digital experiences truly took flight.`,

    "Ahmed became someone who balanced curiosity with logic, turning creative ideas into functional realities. He wasn't just designing websites anymore—he was crafting interactive experiences, spaces where users could feel at ease and engaged. He began to see himself as a digital artist, creating flexible, fluid, and seamless experiences that make technology feel almost like magic.",

    "Now, he's here, turning every idea into code and every design into a living, breathing experience. If you're looking for interfaces that don't just sit still but move, react, and come alive in the best possible way… then welcome. You're in the right place.",
  ],
};

const projects = [
  {
    id: "crusto-restaurant",
    title: "Crusto Restaurant",
    date: "2024-09",
    category: "Static Website",

    images: {
      main: "/images/project6-crusto.jpg",
      gallery: [
        "/images/crusto-1.jpg",
        "/images/crusto-2.jpg",
        "/images/crusto-3.jpg",
      ],
    },

    description: {
      short: "An Italian restaurant on Egyptian lands with a taste of history",
      detailed:
        "Crusto is a modern static restaurant website that serves up a digital slice of Italy right in the heart of Egypt. With a dark, elegant aesthetic and stylish serif typography, it captures the cozy sophistication of an Italian dining experience. Designed as a single-scroll experience, the site highlights the menu, services, and brand story with a sleek layout that keeps visitors engaged from first glance to final CTA.",
      features: [
        "Hero section with full-width imagery and compelling call-to-action.",
        "Smooth scroll-triggered animations (text fade-ins, transitions).",
        "Fully responsive across all devices and screen sizes.",
        "Clear structure: About, Menu, Testimonials, Contact.",
        "Balanced typography using modern serif/sans-serif mix.",
        "Hover effects and transitions for interactive feedback",
      ],
    },

    links: {
      live: "https://crusto-resturant.netlify.app/",
      github: "https://github.com/2ao1-1/Crusto",
    },

    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],

    challenges: [
      {
        challenge: "Creating smooth animations without JavaScript libraries",
        solution:
          "Used pure CSS animations with careful timing and easing functions",
      },
    ],

    stats: {
      developmentTime: "2 weeks",
      linesOfCode: 1500,
      pageSpeed: 95,
      accessibility: 98,
    },
  },

  {
    id: "banki-financial",
    title: "Banki Financial Platform",
    date: "2024-10",
    category: "Landing Page",

    images: {
      main: "/images/project5-banki.jpg",
      gallery: [
        "/images/banki-1.jpg",
        "/images/banki-2.jpg",
        "/images/banki-3.jpg",
      ],
    },

    description: {
      short: "A secure and user-friendly platform for financial services",
      detailed:
        "Banki is a clean and professional landing page tailored for a fictional bank or financial platform. It uses a calm, trustworthy color palette and minimalist layout to convey financial security and user trust.",
      features: [
        "Clean grid-based layout for easy scanning",
        "Sticky navigation bar for quick access",
        "Hero section with key messaging and CTA",
        "Responsive design with mobile adjustments",
        "Service cards with iconography",
        "Testimonials and trust indicators",
      ],
    },

    links: {
      live: "https://banky.netlify.app/",
      github: "https://github.com/2ao1-1/Banki",
      figma: null,
    },

    technologies: ["HTML5", "CSS3", "JavaScript"],
  },

  {
    id: "moveon-fitness",
    title: "MoveOn Fitness",
    date: "2024-11",
    category: "Static Website",

    images: {
      main: "/images/project3-moveon.jpg",
      gallery: [],
    },

    description: {
      short: "An active lifestyle with fitness training",
      detailed:
        "MoveOn is a visually striking fitness website designed to promote a healthy lifestyle and gym membership programs. It uses powerful imagery, bold typography, and bright colors to reflect energy and action.",
      features: [
        "Fullscreen hero section with motivational slogan",
        "Bold color palette suitable for fitness branding",
        "About & Services sections with visual icons",
        "Testimonials and pricing plans",
        "Contact form with functional structure",
        "Fully mobile-friendly with flex/grid layout",
      ],
    },

    links: {
      live: "https://moveon-fitness.netlify.app/",
      github: "https://github.com/2ao1-1/MoveOn",
      figma: null,
    },

    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },

  {
    id: "ao-portfolio",
    title: "AO Portfolio",
    date: "2024-12",
    category: "Portfolio",

    images: {
      main: "/images/project1-Portfolio.jpg",
      gallery: [],
    },

    description: {
      short:
        "Personal portfolio website showcasing frontend development skills and projects",
      detailed:
        "AO is a fully responsive and animated portfolio website showcasing frontend development projects. Built using React, Framer Motion, and modern design patterns, it reflects professional branding and developer personality.",
      features: [
        "Animated page transitions with Framer Motion",
        "Project filtering by category",
        "Dark/light theme contrast",
        "Highlighted tech stack in each project card",
        "Scroll-based animations and hover effects",
        "Responsive navigation and internal routing",
      ],
    },

    links: {
      live: "https://2ao1.netlify.app/",
      github: "https://github.com/2ao1-1/AO",
      figma: null,
    },

    technologies: ["React", "Tailwind CSS", "Framer Motion"],
  },

  {
    id: "bsaraha-messaging",
    title: "Bsaraha",
    date: "2025-02",
    category: "Full Stack App",

    images: {
      main: "/images/project7-bsaraha.jpg",
      phone: "/images/project7-bsaraha-phone.jpg",
      gallery: [],
    },

    description: {
      short: "Anonymous messaging platform for honest communication",
      detailed:
        "Bsaraha is a full-stack anonymous messaging platform inspired by 'Saraha'. Built using React for the frontend and Node/Express for the backend, users can create accounts, receive and send messages, and manage their inbox securely.",
      features: [
        "JWT-based authentication system",
        "Anonymous message submission interface",
        "Real-time updates (messages appear directly)",
        "User-friendly dashboard for received messages",
        "Doctor approval workflow with email notification",
        "Mobile-responsive design",
      ],
    },

    links: {
      live: "http://144.91.75.57:3000",
      github: "https://github.com/2ao1-1/bsaraha",
      figma: null,
    },

    technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
  },

  {
    id: "crusto-pizza-v2",
    title: "Crusto Pizza v2",
    date: "2025-04",
    category: "UI Redesign",

    images: {
      main: "/images/project6-crusto.jpg",
      gallery: [],
    },

    description: {
      short: "An Italian pizza restaurant with improved mobile design",
      detailed:
        "Crusto Pizza is an upgraded version of the original Crusto site with an emphasis on mobile usability, cleaner design, and more expressive visual hierarchy.",
      features: [
        "Improved responsive layout with mobile-first design",
        "Simple, readable fonts and color contrast",
        "Clear CTA and menu presentation",
        "Lightweight animations and hover states",
        "Structured content flow (hero → services → menu → contact)",
      ],
    },

    links: {
      live: "https://crusto-pizza.netlify.app/",
      github: "https://github.com/2ao1-1/Crusto-v2",
      figma: null,
    },

    technologies: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS"],
  },
];

export default {
  personalInfo,
  educationAndSkills,
  socialMedia,
  biography,
  projects,
};
