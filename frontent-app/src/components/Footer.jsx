import { Link } from "react-router-dom";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <h3>
            <span>◎</span> Found-IT
          </h3>

          <p>
            A community-driven platform dedicated to reuniting people with their
            lost belongings. Fast, simple, and secure.
          </p>

          <div className="social-icons">
            <span>f</span>
            <span>𝕏</span>
            <span>◎</span>
          </div>
        </div>

        <div className="footer-column">
          <h4>Platform</h4>

          <Link to="/lost-items">Report Lost Item</Link>
          <Link to="/found-items">Report Found Item</Link>
          <Link to="/tracking">Browse Listings</Link>
          <Link to="/success">Success Stories</Link>
        </div>

        <div className="footer-column">
          <h4>Support</h4>

          <Link to="/help">Help Center</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 Found-IT. All rights reserved.</span>

        <div>
          <span>Cookie Settings</span>
          <span>Accessibility</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
