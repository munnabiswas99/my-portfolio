import Hero from "../sections/Hero";
import Skills from "../sections/Skills";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="py-4 text-center">
        <Skills />
      </section>
    </div>
  );
}