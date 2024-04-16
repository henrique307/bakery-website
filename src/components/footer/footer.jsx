import { Logo } from "../utils/logo/Logo.component";
import { InstagramLogo, TiktokLogo, LinkedInLogo, GithubLogo } from "../../icons";
import "./footer.scss";

export function FooterComponent() {
  return (
    <footer>
      <div className="footer-container">
        <div className="logo-container">
          <Logo></Logo>
          <span className="text-xs">
            Sophisticated simplicity for the independent mind.
          </span>
          <div className="icons">
            <InstagramLogo />
            <TiktokLogo />
            <GithubLogo />
            <LinkedInLogo />
          </div>
        </div>
        <div className="infos">
          <div className="help-information">
            <h1>Help & Information</h1>
            <a href="#">About Us</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & conditions</a>
            <a href="#">Products Return</a>
            <a href="#">Wholesale Policy</a>
          </div>
          <div className="about">
            <h1>About us</h1>
            <a href="#">Pagination</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Contact</a>
            <a href="#">Accessories</a>
            <a href="#">Term of use</a>
          </div>
          <div className="categories">
            <h1>Categories</h1>
            <a href="#">Help Center</a>
            <a href="#">Home page</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Receivers & Amplifiers</a>
            <a href="#">Delivery & Returns</a>
          </div>
        </div>
      </div>
      <div className="copy">
        <span>© Copyright Henrique Florencio 2024</span>
      </div>
    </footer>
  );
}
