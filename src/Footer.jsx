import React from 'react'
// import App from './App';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap-icons/font/bootstrap-icons.css';





const Footer = () => {
  return (
    <footer className="footer">
    <div className="footer-top">
      <div className="footer-section">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Jobs</a></li>
          <li><a href="#">For the Record</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Communities</h4>
        <ul>
          <li><a href="#">For Artists</a></li>
          <li><a href="#">Developers</a></li>
          <li><a href="#">Advertising</a></li>
          <li><a href="#">Investors</a></li>
          <li><a href="#">Vendors</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Useful Links</h4>
        <ul>
          <li><a href="#">Support</a></li>
          <li><a href="#">Free Mobile App</a></li>
         
        </ul>
      </div>
      <div className="footer-section">
       <h4> Spotify Plans</h4>
       <ul>
          <li><a href="#">Premium Individual</a></li>
          <li><a href="#">Premium Duo</a></li>
          <li><a href="#">Premium Family</a></li>
          <li><a href="#">Premium Student</a></li>
          <li><a href="#">Spotify Free</a></li>
       </ul>
      
      </div>
      <div className="social-icons">
        <a href="#" aria-label="Instagram">
        <i class="bi bi-instagram"></i>
        </a>
        <a href="#" aria-label="Twitter">
        <i class="bi bi-twitter"></i>
        </a>
        <a href="#" aria-label="Facebook">
        <i class="bi bi-facebook"></i>
        </a>
      </div>
    </div>
    <div className="footer-bottom"> 
        <a href="#">Legal</a>
        <a href="#">Safety & Privacy Center</a>
        <a href="#">Privacy Policy</a>
        <a href="#">Cookies</a>
        <a href="#">About Ads</a>
        <a href="#">Accessibility</a>
        
      <p>© 2024 Spotify AB</p>
    </div>
    </footer>

  )
}

export default Footer