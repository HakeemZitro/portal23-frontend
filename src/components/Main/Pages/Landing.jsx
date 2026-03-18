import Hero from "./Hero/Hero.jsx";
import Intro from "./Intro/Intro.jsx";
import Services from "./Services/Services.jsx";
import Values from "./Values/Values.jsx";
import Testimonials from "./Testimonials/Testimonials.jsx";
import Contact from "./Contact/Contact.jsx";

export default function Landing() {
  return (
    <div className="landing">
      <Hero />
      <Intro />
      <Services />
      <Values />
      <Testimonials />
      <Contact />
    </div>
  );
}