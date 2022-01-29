import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect, useCallback } from "react";
import { useTransition, animated } from "react-spring";

const SkillsLoaded = ({ data }) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const slideHandler = setInterval(() => {
      if (current === data.length - 1) {
        setCurrent(0);
      } else {
        setCurrent(current + 1);
      }
    }, 4000);
    return () => {
      clearInterval(slideHandler);
    };
  }, [current, data]);

  const prevPic = () => {
    if (!current) {
      setCurrent(data.length - 1);
    } else {
      setCurrent(current - 1);
    }
  };

  const nextPic = () => {
    if (current === data.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

  const keyPress = useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        if (!current) {
          setCurrent(data.length - 1);
        } else {
          setCurrent(current - 1);
        }
      } else if (event.key === "ArrowRight") {
        if (current === data.length - 1) {
          setCurrent(0);
        } else {
          setCurrent(current + 1);
        }
      }
    },
    [current, setCurrent, data.length]
  );

  useEffect(() => {
    document.addEventListener("keydown", keyPress);
    return () => document.removeEventListener("keydown", keyPress);
  });

  const transitions = useTransition(data[current], {
    from: { opacity: 0, transform: "scale(1.1)" },
    enter: { opacity: 1, transform: "scale(1)" },
    to: { opacity: 0, transform: "scale(0.9)" },
  });

  const fragment = transitions((style, item) => {
    return (
      <animated.div className="skill" style={style}>
        <img src={item.logo.secure_url} alt={item.name} />
        <strong>{item.name}</strong>
      </animated.div>
    );
  });

  return (
    <div className="skills">
      <FontAwesomeIcon
        icon="chevron-left"
        className="chevron"
        onClick={prevPic}
      />
      <div>{fragment}</div>
      <FontAwesomeIcon
        icon="chevron-right"
        className="chevron"
        onClick={nextPic}
      />
    </div>
  );
};

export default SkillsLoaded;
