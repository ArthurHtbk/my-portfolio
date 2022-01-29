import aboutData from "../about.json";
import DownloadButton from "./DownloadButton";

const AboutMe = ({ english }) => {
  return (
    <section id="about">
      <div className="title-box">
        <h1 className="title">{english ? "About me" : "À propos"}</h1>
      </div>
      {english
        ? aboutData.english.split("\n").map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })
        : aboutData.french.split("\n").map((paragraph, index) => {
            return <p key={index}>{paragraph}</p>;
          })}
      <DownloadButton english={english} />
      <div className="top-box">
        <a href="#top" className="top">
          {english ? "#back_to_top" : "#haut_de_page"}
        </a>
      </div>
    </section>
  );
};

export default AboutMe;
