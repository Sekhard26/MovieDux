import React from 'react';
import '../styles.css';
import favLogo from "../assets/fav.png";
import { 
    FaFacebook, 
    FaTwitter, 
    FaGoogle, 
    FaInstagram, 
    FaLinkedin, 
    FaGithub,
    FaHome,
    FaEnvelope,
    FaPhone,
   
} from 'react-icons/fa';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return(
        <footer className='footer'>
            {/* Social Media Section */}
            <div className="social-section">
                <div className="social-container">
                    <div className="social-content">
                        <div className="social-left">
                            <p className="social-text">Stay connected with us on social networks:</p>
                        </div>
                        <div className="social-right">
                            <div className="social-icons">
                                <a href="https://facebook.com" className="social-icon-link facebook">
                                    <FaFacebook />
                                </a>
                                <a href="https://twitter.com" className="social-icon-link twitter">
                                    <FaTwitter />
                                </a>
                                <a href="https://google.com" className="social-icon-link google">
                                    <FaGoogle />
                                </a>
                                <a href="https://instagram.com" className="social-icon-link instagram">
                                    <FaInstagram />
                                </a>
                                <a href="https://linkedin.com" className="social-icon-link linkedin">
                                    <FaLinkedin />
                                </a>
                                <a href="https://github.com" className="social-icon-link github">
                                    <FaGithub />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="footer-content">
                <div className="footer-section">
                    <div className="footer-brand">
                        <img src={favLogo} alt="Moviedux Logo" className="footer-logo" />        
                <h3>MOVIEDUX</h3>
                    </div>
                    <p className="footer-address">
                        Jagamara, Bhubaneswar<br />
                        Odisha, 756100, INDIA
                    </p>
                </div>
                
                <div className="footer-section">
                    <h4 className="footer-heading">USEFUL LINKS</h4>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/watchlist">Watchlist</a></li>
                        <li><a href="/contact">Feedback</a></li>
                    </ul>
                </div>
                
                <div className="footer-section">
                    <h4 className="footer-heading">CONTACT</h4>
                    <div className="footer-contact">
                        <p><FaHome /> Odisha, 756100, INDIA</p>
                        <p><FaEnvelope /> rstag2616@gmail.com</p>
                        <p><FaPhone />+91 9348126809</p>
                        
                    </div>
                </div>
            </div>
            
            <div className="footer-bottom">
                <p className='footer-text'>© {currentYear} Moviedux. All rights reserved.</p>
            </div>
        </footer>
    );
}