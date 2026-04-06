import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "HTML5",
    "CSS3",
    "JavaScript (ES6+)",
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Firebase",
    "Git & GitHub",
    "REST APIs",
    "Responsive Design",
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-14"
      >
        About Me
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/src/assets/images/munna0.JPG"
            alt="Munna Biswas"
            className="w-72 md:w-80 rounded-2xl shadow-xl"
          />
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-4">
            MERN Stack Developer
          </h2>

          <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
            Hi, I'm <span className="font-semibold">Munna Biswas</span>, a
            passionate MERN stack developer from Dhaka, Bangladesh. I enjoy
            building modern, responsive, and scalable web applications using
            technologies like React, Node.js, Express, and MongoDB.
          </p>

          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
            I focus on writing clean code, designing intuitive user interfaces,
            and creating efficient backend APIs. I enjoy learning new
            technologies and continuously improving my development skills
            through real-world projects.
          </p>

          {/* Education */}
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Education</h3>
            <p className="text-gray-600 dark:text-gray-300">
              BSc in Computer Science & Engineering  
              <br />
              Daffodil International University (2022 - 2025)
            </p>
          </div>
        </motion.div>

      </div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-16"
      >
        <h2 className="text-2xl font-semibold text-center mb-8">
          Technical Skills
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-center hover:shadow-md hover:-translate-y-1 transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}