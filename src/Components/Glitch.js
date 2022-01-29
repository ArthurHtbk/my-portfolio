import { useSpring, animated } from "react-spring";

const Glitch = () => {
  const fadeOut = useSpring({
    to: { opacity: 0 },
    from: { opacity: 1 },
    delay: 3000,
  });

  return (
    <animated.div className="glitch-container" style={fadeOut}>
      <h1 className="glitch">
        <span aria-hidden="true">ARTHUR HEURTEBISE</span>
        ARTHUR HEURTEBISE
        <span aria-hidden="true">ARTHUR HEURTEBISE</span>
      </h1>
    </animated.div>
  );
};

export default Glitch;
