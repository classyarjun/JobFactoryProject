



import { Link } from "react-router";
import "./Nav.css"

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-white fixed-top shadow-sm">
      <div className="container">
        <Link to="/" className="navbar-brand me-4">
          <img
            src="assets/jobfactoryicon.jpg"
            alt="The Job Factory Logo"
            style={{ width: "100px", height: "80px" }}
          />
        </Link>
        
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item mx-2">
              <Link to="/" className="nav-link fw-bold text-uppercase">
                Home
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/about" className="nav-link fw-bold text-uppercase">
                About
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/contact" className="nav-link fw-bold text-uppercase">
                Contact
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/client" className="nav-link fw-bold text-uppercase">
                Client
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/services" className="nav-link fw-bold text-uppercase">
                Services
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link to="/team" className="nav-link fw-bold text-uppercase">
                Our Team
              </Link>
            </li>
          </ul>
          
          <div className="d-flex ms-lg-3 nav-item">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScwu2wNTmmrGxhIkR0NyKvf2ZP5klVwDNm2HxDQeo9uX8yfDg/viewform?fbzx=1216962047395808749"
              className=" fw-bold py-2 px-4"
              style={{ whiteSpace: 'nowrap' }}
            >
                  <button>Apply Job</button>
            </a>
          </div>

          

        </div>
      </div>
    </nav>
  );
};

export default Navbar;