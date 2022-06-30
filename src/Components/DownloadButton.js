import axios from "axios";
import fileDownload from "js-file-download";

const DownloadButton = ({ english }) => {
  const handleDownload = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.get(
        `https://portfolio-backend-arthur.herokuapp.com/resume/download?english=${english}`,
        { responseType: "blob" }
      );
      if (english) {
        fileDownload(response.data, "arthur_heurtebise_resume.pdf");
      } else {
        fileDownload(response.data, "CVArthurHeurtebise.pdf");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <button
      className="download"
      onClick={(event) => {
        handleDownload(event);
      }}
    >
      {english ? "My resume" : "Mon CV"}
    </button>
  );
};

export default DownloadButton;
