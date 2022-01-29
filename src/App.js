import "./App.css";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";

import Header from "./Components/Header";
import Glitch from "./Components/Glitch";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faChevronLeft, faChevronRight, faLinkedinIn, faGithub);

function App() {
  const [intro, setIntro] = useState(true);
  const [english, setEnglish] = useState(true);

  useEffect(() => {
    const introHandler = setTimeout(() => {
      setIntro(false);
    }, 3500);
    return () => {
      clearTimeout(introHandler);
    };
  }, []);

  const fadeIn = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 4000,
  });

  return intro ? (
    <Glitch />
  ) : (
    <animated.div style={fadeIn}>
      <Header english={english} setEnglish={setEnglish} />
      <Content english={english} />
      <Footer english={english} />
    </animated.div>
  );
}

export default App;
