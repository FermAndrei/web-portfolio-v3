export const ProjectData = [
  {
    id: 1,
    name: "BiliGo",
    description:
      "Biligo is a simple e-commerce web app I built to improve my React skills. It features product browsing, item details, and a working cart system. The app uses React.js, Axios for API calls, React Router for navigation, and Tailwind CSS for styling, with product data powered by DummyJSON.",
    type: "E-Commerce",
    thumbnail:
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
    date: "Oct, 27 2025",
    techUse: [
      "ReactJS",
      "Tailwind",
      "Axios",
      "Vite",
      "DummyJson",
      "CSS",
      "React Router",
      "Git",
    ],
    projectLink: "https://biligo.vercel.app/",
    gitHub: "https://github.com/FermAndrei/biligoPROD",
    liveDemo: true,
  },
  {
    id: 2,
    name: "MeloVerse",
    description:
      "MeloVerse is my first React project, built to learn components and understand how React works. It also helped me practice creating responsive layouts and styling using Tailwind CSS.",
    type: "Landing Page",
    thumbnail:
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
    date: "Dec, 13 2024",
    techUse: ["ReactJS", "Tailwind", "Vite", "Git"],
    projectLink: "https://meloverse1.vercel.app/",
    gitHub: "https://github.com/FermAndrei/MeloVerse",
    liveDemo: true,
  },
  {
    id: 3,
    name: "Web Porfolio",
    description:
      "My first personal portfolio website showcasing my projects, skills, and UI design. Built with ReactJS and Tailwind CSS, it features responsive layouts, organized components, and smooth AOS animations for a modern user experience.",
    type: "Portfolio V1",
    thumbnail:
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
    date: "Jan, 3 2024",
    techUse: ["ReactJS", "Tailwind", "Vite", "DataAOS", "Git"],
    projectLink: "https://favt.vercel.app/",
    gitHub: "https://github.com/FermAndrei/web-portfolio",
    liveDemo: true,
  },
  {
    id: 4,
    name: "Web Porfolio V2",
    description:
      "Web Portfolio V2 is an improved version of my first portfolio, featuring cleaner structure and smoother navigation. It uses React Router for page routing and JSON data to display projects dynamically. Built with ReactJS and Tailwind CSS, it highlights better UI design, responsiveness, and overall presentationThe Emergency and Disaster Response Application for Nagcarlan, Laguna is a community-focused system built for BFP Nagcarlan. It provides real-time emergency updates, lets residents report incidents, and offers resources like checklists and evacuation center locations. Designed for both responders and the community.",
    type: "Portfolio V2",
    thumbnail:
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
    date: "Dec, 2 2025",
    techUse: ["ReactJS", "Tailwind", "MUI", "React Router", "Vite", "Git"],
    projectLink: "https://biligo.vercel.app/",
    gitHub: "https://github.com/FermAndrei/web-portfolio-v2",
    liveDemo: true,
  },
  {
    id: 5,
    name: "Disaster Response Application",
    description:
      "Emergency and Disaster Response Application for Nagcarlan, Laguna is a community-focused system developed for the Bureau of Fire Protection (BFP) Nagcarlan to strengthen disaster preparedness and response. The application provides real-time updates during emergencies, allows residents to report incidents directly, and offers essential resources such as an emergency checklist and nearby evacuation center locations. Designed to support both responders and the community, it improves communication, safety awareness, and overall emergency coordination.",
    projectLink: "www.youtube.com",
    type: "Thesis",
    thumbnail:
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
    date: "Dec, 5 2022",
    techUse: ["C#", "Java", "FireBase", "SQL", "Git"],
    gitHub: "https://github.com/FermAndrei/EmergencyApp-Mobile",
    liveDemo: false,
  },
  {
    id: 6,
    name: "Car Rental",
    description:
      "Car Rental is a school project built to practice CRUD operations. It lets users browse vehicles, make reservations, and manage bookings through a simple and user-friendly interface, simulating a real car rental experience.",
    projectLink: "www.youtube.com",
    type: "Project",
    thumbnail:
      "https://images.unsplash.com/photo-1758873271902-a63ecd5b5235?w=300&h=200&fit=crop",
    date: "Dec, 5 2022",
    techUse: ["C#", "MySQL", "Git"],
    gitHub: "https://github.com/FermAndrei/Car-Rental",
    liveDemo: false,
  },
].map((item) => ({
  ...item,
  slug: item.name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^a-z0-9-]/g, ""),
}));
