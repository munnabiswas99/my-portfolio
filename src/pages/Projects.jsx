import ProjectCard from "../sections/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "Job Portal",
      desc: "A modern job portal that connects job seekers with employers through a smooth and responsive experience.",
      image: "/public/images/projectThumbnails/jobPortal.png",
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
      image: "/public/images/projectThumbnails/newsPortal.png",
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
      image: "/public/images/projectThumbnails/bookVibe.png",
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
      image: "/public/images/projectThumbnails/phTube.png",
      features: [
        "Dynamic video loading from API",
        "Category filtering and search functionality",
        "Sorting system",
        "Responsive Tailwind interface",
      ],
      live: "https://munnabiswas99.github.io/PH_Tube-API-Data-Manupulation-/",
      client: "https://github.com/munnabiswas99/PH_Tube-API-Data-Manupulation-",
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