import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"
          >
            Hi, I'm{" "}
            <span className="text-blue-600">
              Munna Biswas
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-4"
          >
            MERN Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed"
          >
            I build modern, scalable and responsive web applications using
            the MERN stack (MongoDB, Express, React, Node.js). I enjoy turning
            ideas into real products with clean UI, efficient APIs, and
            optimized performance.
          </motion.p>

          {/* Tech stack */}
          <p className="text-sm text-gray-500 mb-6">
            React • Node.js • Express • MongoDB • Tailwind • Firebase
          </p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              to="/projects"
              className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition"
            >
              View Projects
            </Link>

            <Link
              to="/contact"
              className="border px-6 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Contact Me
            </Link>

            <a
              href="/Munna-Biswas-CV.pdf"
              className="border px-6 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              Download CV
            </a>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >
          <img
            src="/profile.jpg"
            alt="Munna Biswas"
            className="w-72 md:w-80 rounded-full shadow-xl border-4 border-white"
          />
        </motion.div>

      </div>
    </section>
  );
}