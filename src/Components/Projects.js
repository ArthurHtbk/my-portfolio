import { useState, useEffect } from "react";
import axios from "axios";
import projectsData from "../projects.json";
import PacmanLoader from "react-spinners/PacmanLoader";

const Projects = ({ english }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-backend-arthur.herokuapp.com/projects"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <section
      id="projects"
      style={{
        justifyContent: isLoading && "space-between",
        alignItems: isLoading && "center",
      }}
    >
      <div className="title-box">
        <h1 className="title">{english ? "My projects" : "Mes projets"}</h1>
      </div>
      {isLoading ? (
        <div className="loader">
          <PacmanLoader color={"#d81b45"} loading={isLoading} size={30} />
        </div>
      ) : (
        data.map((item, index) => {
          return (
            <div className="project" key={item._id}>
              <div className="image-section">
                <img src={item.image.secure_url} alt={item.name} />
                <div className="pseudo-modal" tabIndex={0}>
                  <a
                    href={projectsData[index].repository.frontend}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    #GitHub_frontend
                  </a>
                  <a
                    href={projectsData[index].repository.backend}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    #GitHub_backend
                  </a>
                  <a
                    href={projectsData[index].url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {english ? "#visit_website" : "#visiter_le_site"}
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h2>
                  {english
                    ? projectsData[index].name.english
                    : projectsData[index].name.french}
                </h2>
                <p>
                  {english
                    ? projectsData[index].description.english
                    : projectsData[index].description.french}
                </p>
                <div className="tools">
                  {projectsData[index].tools.map((tool, index) => {
                    return <span key={index}>{tool}</span>;
                  })}
                </div>
              </div>
            </div>
          );
        })
      )}
      <div className="top-box">
        <a href="#top" className="top">
          {english ? "#back_to_top" : "#haut_de_page"}
        </a>
      </div>
    </section>
  );
};

export default Projects;
