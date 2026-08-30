import { motion } from "framer-motion";

export default function ProjectCard({ project }) {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3 }}
      className="rounded-xl overflow-hidden border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-md hover:shadow-xl flex flex-col"
    >
      {/* Image */}
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-44 object-cover"
        />
      )}

      <div className="p-6 flex flex-col flex-grow">
        {/* Title */}
        <h3 className="text-xl font-semibold mb-2">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm">
          {project.desc}
        </p>

        {/* Features */}
        {project.features && (
          <ul className="text-sm text-gray-500 dark:text-gray-400 mb-5 list-disc ml-4 space-y-1">
            {project.features.slice(0, 3).map((feature, i) => (
              <li key={i}>{feature}</li>
            ))}
          </ul>
        )}

        {/* Links */}
        <div className="flex flex-wrap gap-3 mt-auto">
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Live
            </a>
          )}

          {project.client && (
            <a
              href={project.client}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 text-sm border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Source Code
            </a>
          )}

          {project.server && (
            <a
              href={project.server}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-1.5 text-sm border rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Server Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}