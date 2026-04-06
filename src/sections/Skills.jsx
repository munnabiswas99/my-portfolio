import { motion } from "framer-motion";

export default function Skills() {
  const skills = ["React", "Tailwind", "Node.js", "Firebase", "JavaScript"];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {skills.map((skill, i) => (
        <motion.span
          key={skill}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="px-4 py-2 rounded-full bg-gray-200 dark:bg-gray-800"
        >
          {skill}
        </motion.span>
      ))}
    </div>
  );
}