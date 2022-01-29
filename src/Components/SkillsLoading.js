import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import html5Logo from "../Images/html5_logo.png";

const SkillsLoading = () => {
  return (
    <div className="skills">
      <FontAwesomeIcon icon="chevron-left" className="chevron" />
      <div className="skill">
        <img src={html5Logo} alt="HTML 5" />
        <strong>HTML 5</strong>
      </div>
      <FontAwesomeIcon icon="chevron-right" className="chevron" />
    </div>
  );
};

export default SkillsLoading;
