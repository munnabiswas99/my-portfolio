import ProjectCard from "../sections/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "CMS Platform (sumansubhan.com)",
      desc: "A production content publishing platform built for a client to manage and share poems, articles, songs, books, photos, and other creative content.",
      image: "/images/projectThumbnails/sumanSubhan.png",
      features: [
        "Admin dashboard with authentication and content management",
        "Book, article, song, poem, album, and photo management",
        "MongoDB Atlas and Cloudinary integration",
        "Deployed and managed on a Linux VPS",
      ],
      live: "https://sumansubhan.com/",
      client: "https://github.com/sumonsubhan/suman-subhan"
    },

    {
      title: "BD Telecom Icons",
      desc: "An open-source React icon library featuring reusable icons for Bangladeshi telecom operators.",
      image: "/images/projectThumbnails/bdTelecomIcons.png",
      features: [
        "Reusable React components built from SVG assets",
        "Customizable size, color, className, and SVG props",
        "Tree-shaking support for optimized integration",
        "Published on npm with 290+ monthly downloads",
      ],
      live: "https://www.npmjs.com/package/bd-telecom-icons",
      client: "https://github.com/munnabiswas99/bd-telecom-icons",
    },

    {
      title: "Personal Expense Tracker",
      desc: "A full-stack personal finance application for managing income, expenses, and financial activities.",
      image: "/images/projectThumbnails/expenseTracker.png",
      features: [
        "Income and expense tracking with CRUD operations",
        "Secure authentication and protected routes",
        "Transaction categorization and management",
        "Interactive dashboard with financial summaries",
      ],
      live: "https://personal-expense-tracker-a4828.web.app/",
      client: "https://github.com/munnabiswas99/munnabiswas99-web-development-bootcamp-may-2026/tree/main/munnabiswas99",
    },
    {
      title: "Job Portal",
      desc: "A modern job portal that connects job seekers with employers through a smooth and responsive experience.",
      image: "/images/projectThumbnails/jobPortal.png",
      features: [
        "Dynamic job listing using React and REST APIs",
        "Secure authentication and role-based access",
        "Job posting and application tracking system",
        "Responsive UI with Tailwind CSS",
      ],
      live: "https://job-portal-11fa2.web.app/",
      client: "https://github.com/munnabiswas99/job-portal-client",
      server: "https://github.com/munnabiswas99/job-portal-server",
    },
    {
      title: "News Portal",
      desc: "React-based news portal with category filtering and Firebase authentication.",
      image: "/images/projectThumbnails/newsPortal.png",
      features: [
        "Dynamic news rendering from APIs",
        "Firebase authentication with protected routes",
        "Category filtering system",
        "Clean responsive UI with Tailwind CSS",
      ],
      live: "https://dragon-news-portal-2ea39.web.app/category/1",
      client: "https://github.com/munnabiswas99/dragon-news",
    },
    {
      title: "Book Vibe",
      desc: "A responsive application for discovering and exploring books.",
      image: "/images/projectThumbnails/bookVibe.png",
      features: [
        "Book browsing with API integration",
        "Reusable React components",
        "Responsive Tailwind UI",
        "Optimized performance",
      ],
      live: "https://wooden-bun.surge.sh/",
      client: "https://github.com/munnabiswas99/Book-Vibe",
    },
    {
      title: "PH Tube",
      desc: "A video browsing platform with search, filtering, and sorting features.",
      image: "/images/projectThumbnails/phTube.png",
      features: [
        "Dynamic video loading from API",
        "Category filtering and search functionality",
        "Sorting system",
        "Responsive Tailwind interface",
      ],
      live: "https://munnabiswas99.github.io/PH_Tube-API-Data-Manupulation-/",
      client: "https://github.com/munnabiswas99/PH_Tube-API-Data-Manupulation-",
    },
    {
      title: "RFID-based Automatic Door Lock System using ESP8266 and Blynk",
      desc: "Within this system framework we have formulated and designed an IoT based smart door lock solution by incorporating RFID authentication, servo motor control, logging online on the cloud and mobile-based tracking to achieve secure and efficient access management. ",
      image: "/images/projectThumbnails/rfid.png",
      features: [
        "RFID authentication",
        "servo motor control",
        "logging online on the cloud and mobile-based tracking",
        "Automatic entry on google sheet",
      ],
      live: "https://drive.google.com/file/d/1t-dCZQ4oWmiKHTf3h-NbQDT9buaIg8ri/view?usp=drive_link",
      client: "https://github.com/munnabiswas99/RFID_Door_Lock",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        My Projects
      </h1>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}
