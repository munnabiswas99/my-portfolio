import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-10 items-center"
      >
        {/* Text Section */}
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            About Me
          </h1>

          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Hi, I'm <span className="font-semibold">Munna</span>, a passionate
            web developer who enjoys building modern and responsive web
            applications. I focus on creating clean user interfaces and smooth
            user experiences.
          </p>

          <p className="text-gray-600 dark:text-gray-300">
            I mainly work with React and modern JavaScript tools. I enjoy
            learning new technologies and turning ideas into real, functional
            web applications.
          </p>
        </div>

        {/* Skills Section */}
        <div className="grid grid-cols-2 gap-4">
          {[
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Firebase",
            "Git & GitHub",
          ].map((skill) => (
            <div
              key={skill}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center hover:shadow-md transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}