import facebook_icon from "../../assets/facebook_icon.png";
import github_icon from "../../assets/github_icon.png";
import linkedin_icon from "../../assets/linkedin_icon.png";
import ntp from "../../assets/ntp.png";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={github_icon} alt="Github Icon" />
        <img src={linkedin_icon} alt="Instagram Icon" />
        <img src={ntp} alt="N Icon" className="ntp" />
        <img src={facebook_icon} alt="Facebook Icon" />
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
