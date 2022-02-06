import axios from "axios";
import { useState } from "react";

import Sent from "./Sent";

const Contact = ({ english }) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errormessage, setErrormessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const response = await axios.post(
        "https://portfolio-backend-arthur.herokuapp.com/contact",
        {
          firstname: firstname,
          lastname: lastname,
          email: email,
          subject: subject,
          message: message,
        }
      );
      if (response === "error") {
        if (english) {
          setErrormessage("Oopsie! Seems like something went wrong...");
        } else {
          setErrormessage("Oups ! On dirait que quelque chose cloche...");
        }
      } else {
        setErrormessage("");
        setSent(true);
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <section id="contact">
      <div className="title-box">
        <h1 className="title">{english ? "Contact me" : "Contactez moi"}</h1>
      </div>
      {sent ? (
        <Sent english={english} sent={sent} setSent={setSent} />
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={english ? "Your first name" : "Votre prénom"}
            onChange={(event) => {
              setFirstname(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder={english ? "Your last name" : "Votre Nom"}
            onChange={(event) => {
              setLastname(event.target.value);
            }}
          />
          <input
            type="email"
            placeholder={english ? "Your email address" : "Votre adresse mail"}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="text"
            placeholder={
              english
                ? "The subject of your message"
                : "L'objet de votre message"
            }
            onChange={(event) => {
              setSubject(event.target.value);
            }}
          />
          <textarea
            placeholder={english ? "Your message" : "Votre message"}
            cols="30"
            rows="10"
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></textarea>
          {errormessage && <p style={{ color: "#d81b45" }}>{errormessage}</p>}
          <button type="submit">{english ? "Send" : "Envoyer"}</button>
        </form>
      )}
      <div className="top-box">
        <a href="#top" className="top">
          {english ? "#back_to_top" : "#haut_de_page"}
        </a>
      </div>
    </section>
  );
};

export default Contact;
