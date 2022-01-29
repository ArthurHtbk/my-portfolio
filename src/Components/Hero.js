import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import axios from "axios";

import SkillsLoading from "./SkillsLoading";
import SkillsLoaded from "./SkillsLoaded";
import DownloadButton from "./DownloadButton";

const Hero = ({ english }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend-arthur.herokuapp.com/skills"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  const one = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 1000,
  });

  const two = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 2000,
  });

  const three = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    delay: 3000,
  });

  return (
    <div className="hero">
      <div className="greetings">
        <animated.div style={one}>
          <h1>{english ? "Hello, my name is" : "Bonjour, je m'appelle"}</h1>
        </animated.div>
        <animated.div style={two}>
          <h1 className="vspace name">Arthur Heurtebise</h1>
        </animated.div>
        <animated.div style={three}>
          <h1>
            {english
              ? "and I am a web developer."
              : "et je suis développeur web."}
          </h1>
        </animated.div>
        <DownloadButton english={english} />
      </div>
      {isLoading ? <SkillsLoading /> : <SkillsLoaded data={data} />}
    </div>
  );
};

export default Hero;
