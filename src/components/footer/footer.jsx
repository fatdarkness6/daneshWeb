import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer class="footer">
    <div class="footer-container">
    <div class="footer-logo">
      <h3>Studio Ingegneria</h3>
      <p>Dott.ing Reza Danesh</p>
      <p>Professional engineering services with focus on quality and innovation.</p>
    </div>
      <div class="footer-links">
        <h4>Quick Links</h4>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/aboutUs">About Us</Link></li>
          <li><Link to="/project">Our Projects</Link></li>
          <li><Link to="/contactUs" href="#contact">Contact</Link></li>
          <li><Link to="/news">News</Link></li>
        </ul>
      </div>
      <div class="footer-contact">
        <h4>Contact</h4>
        <ul>
          <li><i class="fas fa-phone"></i> <span>Phone: +39 3519742579</span> </li>
          <li><i class="fas fa-envelope"></i> <span>Email: reza.danesh@ingpec.eu</span> </li>
          <li><i class="fas fa-envelope"></i> <span>Alternate Email: ing.reza.danesh@gmail.com</span></li>
          <li><i class="fas fa-map-marker-alt"></i> <span>Address: Via Verrocchio n.2, Mirano (VE)</span></li>
          <li><i class="fa-solid fa-user-tie"></i> <span>P.IVA: 04863560274</span></li>
          <li><i class="fas fa-clock"></i> Working Hours: Mon-Fri, 9:00 AM - 6:00 PM</li>
        </ul>
      </div>
    </div>
    <div class="footer-social-container">
      <h4>Follow Us</h4>
      <div class="footer-social">
        <a href="https://www.facebook.com/StudioIngegneria" target="_blank"><i class="fab fa-facebook"></i></a>
        <a href="https://www.linkedin.com/company/StudioIngegneria" target="_blank"><i class="fab fa-linkedin"></i></a>
        <a href="https://twitter.com/StudioIngegneria" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="https://www.instagram.com/StudioIngegneria" target="_blank"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
  
    <div class="footer-bottom">
      <p>&copy; 2024 Grupp Danesh. All Rights Reserved.</p>
      <p>Designed by Arsam</p>
      <a href="https://github.com/fatdarkness6" target="_blank">Git Hub</a>
    </div>
  </footer>
  );
}
