import Header from "./Header";
import "./socials.scss";

const Socials = () => {
  return (
    <main>
      <Header />
      <div className="links">
        <a href="#!" className="btn">
          Github
        </a>
        <a href="#!" className="btn">
          Fronend Mentor
        </a>
        <a href="#!" className="btn">
          LinkedLn
        </a>
        <a href="#!" className="btn">
          Twitter
        </a>
        <a href="#!" className="btn">
          Instagram
        </a>
      </div>
    </main>
  );
};

export default Socials;
