import facebook_icon from "../../assets/facebook_icon.png";
import github_icon from "../../assets/github_icon.png";
import linkedin_icon from "../../assets/linkedin_icon.png";
import ntp from "../../assets/ntp.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="https://github.com/niloydiu/" target="_blank">
          <img src={github_icon} alt="Github Icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/niloykumarmohonta000/"
          target="_blank"
        >
          <img src={linkedin_icon} alt="Instagram Icon" />
        </a>
        <a href="https://niloykm.vercel.app/" target="_blank">
          <img src={ntp} alt="N Icon" className="ntp" />
        </a>
        <a href="https://www.facebook.com/niloykumarmohonta000" target="_blank">
          <img src={facebook_icon} alt="Facebook Icon" />
        </a>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">&copy; 1997-2025 Netflix, Inc.</p>
    </div>
  );
};

export default Footer;
