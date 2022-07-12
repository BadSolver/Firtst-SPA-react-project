import "./navbar.scss";
import { ReactComponent as Logo } from '../../assets/logo.svg'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="navbar__logo" href="!#">
        <Logo/>
      </a>
      <ul className="navbar__list">
        <li className="navbar__item">
          <a className="navbar__link" href="!#">
            Features
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="!#">
            Partners
          </a>
        </li>
        <li className="navbar__item">
          <a className="navbar__link" href="!#">
            Stories
          </a>
        </li>
      </ul>
      <button className="navbar__btn" type="button">
        Download for free
      </button>
    </nav>
  );
};
