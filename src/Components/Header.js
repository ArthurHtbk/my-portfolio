const Header = ({ english, setEnglish }) => {
  const toggleLanguage = () => {
    setEnglish(!english);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <h1 className="small name">A.H</h1>
      </div>
      <ul className="navbar-area">
        <li>
          <a className="navbar-link" href="#projects" tabIndex="0">
            {english ? "#my_projects" : "#mes_projets"}
          </a>
        </li>
        <li>
          <a className="navbar-link" href="#about">
            {english ? "#about_me" : "#à_propos"}
          </a>
        </li>
        <li>
          <a className="navbar-link" href="#contact">
            {english ? "#contact_me" : "#contactez_moi"}
          </a>
        </li>
      </ul>
      <div className="languages">
        <button className={!english ? "lit" : ""} onClick={toggleLanguage}>
          FR
        </button>
        <button className={english ? "lit" : ""} onClick={toggleLanguage}>
          EN
        </button>
      </div>
    </nav>
  );
};

export default Header;
