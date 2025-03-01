import { Link, } from "react-router";

function Footer() {
  return (
    <>
        
        <footer id="footer" className="footer dark-background" style={{backgroundImage: "linear-gradient(90deg,#4b6cb7,#000046)",}}>
        <div className="container footer-top">
          <div className="row gy-4">
            <div className="col-lg-4 col-md-6 footer-about">
              <a href="index.html" className="logo d-flex align-items-center">
                <span className="sitename">TheJobFactory</span>
              </a>
              <div className="footer-contact pt-3">
                  <p>RL-81, 1st Floor, Gavhane Business Hub, Opp. Croma Showroom, Ambedkar Chowk,
                     Bajajnagar, Waluj,Chh. Sambhajinagar, (MH),India-431136</p>
                <p className="mt-3">
                <strong>Phone:</strong> <p>+91 7350571535</p>
                </p>
                <p>
                  <strong>Email:</strong> <span>
                  <p>director@jobfactorys.com</p>
                  </span>
                </p>
              </div>
              <div className="social-links d-flex mt-4">
                <a href="">
                  <i className="bi bi-twitter-x"></i>
                </a>
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <Link to="/" >Home</Link>
                </li>
                <li>
                  <Link to="/about">About us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/team">Services</Link>
                </li>
                
              </ul>
            </div>

            <div className="col-lg-2 col-md-3 footer-links">
              <h4>Our Services</h4>
              <ul>
                <li>
                  <Link to="/services">Web Design</Link>
                </li>
                <li>
                  <Link to="/services">Web Development</Link>
                </li>
                <li>
                  <Link to="/services">Product Management</Link>
                </li>
                <li>
                  <Link to="/services">Marketing</Link>
                </li>
                <li>
                  <Link to="/services">Graphic Design</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-4 col-md-12 footer-newsletter">
              <h4>Our Newsletter</h4>
              <p>
                Subscribe to our newsletter and receive the latest news about
                our products and services!
              </p>
              <form className="php-email-form">
                <div className="newsletter-form">
                  <input type="email" name="email" />
                  <input type="submit" value="Subscribe" />
                </div>
                {/* <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your subscription request has been sent. Thank you!
                </div> */}
              </form>
            </div>
          </div>
        </div>

        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>
            <strong className="px-1 sitename">TheJobFactory</strong>
          </p>
          <div className="credits">
            {/* Designed by <a className="text-light" href="">shark developers</a> */}
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
