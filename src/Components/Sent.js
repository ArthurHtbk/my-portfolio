import { useEffect } from "react";

const Sent = ({ english, sent, setSent }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      setSent(!sent);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [sent, setSent]);

  return (
    <p>{english ? "Thanks for your message!" : "Merci de votre message !"}</p>
  );
};

export default Sent;
