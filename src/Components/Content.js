import Hero from "./Hero";
import Projects from "./Projects";
import AboutMe from "./AboutMe";
import Contact from "./Contact";

const Content = ({ english }) => {
  return (
    <div>
      <Hero english={english} />
      <Projects english={english} />
      <AboutMe english={english} />
      <Contact english={english} />
    </div>
  );
};

export default Content;
