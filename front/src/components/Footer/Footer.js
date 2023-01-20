
import "../../styles/footer.css"
import "../../styles/mobile_css/mobilefooter.css"
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
export default function Footer(props) {
    return (
      <nav className="footer">
        <div
          className="footer-menu">
          <ul>
            <li>
              <h5 href="/">Our Company</h5>
              <a>Payments</a>
              <a>Clients</a>
              <a>Analytics</a>
            </li>
            <li>
              <h5 href="/about">About</h5>
              <a>About us</a>
              <a>Start your Business</a>
            </li>
            <li>
              <h5 href="/contact">Social</h5>
              <a><BsInstagram/> Instagram</a>
              <a><BsFacebook/> Facebook</a>
              <a><BsTwitter/> Twitter</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }