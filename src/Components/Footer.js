import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = ({ english }) => {
  return (
    <footer>
      <div>
        <span>
          {english
            ? "Check out my social networks: "
            : "Retrouvez-moi sur mes réseaux sociaux : "}
        </span>
        <a
          href="https://github.com/ArthurHtbk"
          target="_blank"
          rel="noopener noreferrer"
          className="social-networks"
        >
          <button>
            <FontAwesomeIcon icon={["fab", "github"]} />
          </button>
        </a>
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          className="social-networks"
        >
          <button>
            <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
          </button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
