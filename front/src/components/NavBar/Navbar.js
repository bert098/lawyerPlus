
import "../../styles/navbar.css"
import "../../styles/mobile_css/mobilenavbar.css"
import NavbarButton from "./sign-in-button"
export default function Navbar(props) {
    return (
      <nav className="navigation">
        <a href="/" className="brand-name">
          LawyerPlus
        </a>
        <div
          className="navigation-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/contact">Account Settings</a>
            </li>
            <li>
              <a href="/contact">Dashboard</a>
            </li>
          </ul>
        </div>
        <NavbarButton auth={props.auth} setAuth={props.setAuth}/>
      </nav>
    );
  }