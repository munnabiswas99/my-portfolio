import Hero from "../sections/Hero";
import Skills from "../sections/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-6">Skills</h2>
        <Skills />
      </section>
    </div>
  );
}