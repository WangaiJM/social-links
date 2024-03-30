import "./header.scss";
import Avatar from "./../assets/images/avatar-jessica.jpeg";

const Header = () => {
  return (
    <header>
      <img src={Avatar} alt="Avatar Image" className="img" />
      <h1 className="title">Jessica Randall</h1>
      <h2 className="sub-title">London, United Kingdom</h2>
      <p className="description">{"Front-end developer and avid reader."}</p>
    </header>
  );
};

export default Header;
