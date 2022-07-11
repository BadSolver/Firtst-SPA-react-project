import "./navbar.scss";
import navbarLogo from "/Users/User/Desktop/VScode course/TMS/first-SPA-project-react/Firtst-SPA-react-project/power-implicity/src/assets/navbar_logo.png";

export const Navbar = () => {
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <a href="https://github.com/BadSolver">
          <img src={navbarLogo} alt="logo" />
        </a>
      </div>
      <div className="navbar__links">
        <ul className="navbar_link">
          <a href="https://github.com/BadSolver">Features</a>
        </ul>
        <ul className="navbar_link">
          <a href="https://github.com/BadSolver">Partners</a>
        </ul>
        <ul className="navbar_link">
          <a href="https://github.com/BadSolver">Stories</a>
        </ul>
      </div>
      <div className="navbar__dwn-btn">
        <button className="navbar_btn">Download for free</button>
      </div>
    </div>
  );
};
