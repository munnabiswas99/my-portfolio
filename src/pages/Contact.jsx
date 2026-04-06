import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16">

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-3xl md:text-4xl font-bold text-center mb-12"
      >
        Contact Me
      </motion.h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="space-y-6">

          <h2 className="text-2xl font-semibold">
            Let's work together
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            I'm currently open to internship or junior developer
            opportunities. If you have a project or job opportunity,
            feel free to contact me.
          </p>

          <div className="space-y-4 text-gray-600 dark:text-gray-300">

            <p className="flex items-center gap-3">
              <FaEnvelope /> munna.dev345@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <FaPhone /> +880 1615102299
            </p>

            <p className="flex items-center gap-3">
              <FaGithub />
              <a
                href="https://github.com/munnabiswas99"
                className="text-blue-600"
              >
                GitHub
              </a>
            </p>

            <p className="flex items-center gap-3">
              <FaLinkedin />
              <a
                href="https://www.linkedin.com/in/munnabiswas99/"
                className="text-blue-600"
              >
                LinkedIn
              </a>
            </p>

          </div>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full border rounded-lg p-3 dark:bg-gray-900"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border rounded-lg p-3 dark:bg-gray-900"
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className="w-full border rounded-lg p-3 dark:bg-gray-900"
          />

          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Send Message
          </button>

        </form>

      </div>

    </section>
  );
}