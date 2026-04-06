import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Copyright */}
        <p className="text-gray-600 dark:text-gray-400 text-sm">
          © 2026 Munna Biswas. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex items-center gap-5 text-xl text-gray-600 dark:text-gray-400">
          <a
            href="https://github.com/munnabiswas99"
            target="_blank"
            rel="noreferrer"
            className="hover:text-black dark:hover:text-white transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/munnabiswas99/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </footer>
  );
}