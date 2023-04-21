import "./Footer.css";

import logoFacebook from "../../assets/img/fb.png";
import logoTwitter from "../../assets/img/tw.png";
import logoInstagram from "../../assets/img/ig.png";
import logoOrgano from "../../assets/img/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <section>
        <ul>
          <li>
            <a href="facebook.com" target="_blank">
              <img src={logoFacebook} alt="" />
            </a>
          </li>
          <li>
            <a href="twitter.com" target="_blank">
              <img src={logoTwitter} alt="" />
            </a>
          </li>
          <li>
            <a href="instagram.com" target="_blank">
              <img src={logoInstagram} alt="" />
            </a>
          </li>
        </ul>
      </section>

      <section>
        <img src={logoOrgano} alt="" />
      </section>

      <section>
        <p>Developed by Alura</p>
      </section>
    </footer>
  );
};

export default Footer;
