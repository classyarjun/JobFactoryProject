import "./Nav.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router";

function Navbar() {
  return (
    <>
      <header className="header  fixed-top bg-light p-2">
        <div className="container-fluid  d-flex align-items-center  ">
          <Link to="/" className="logo d-flex align-items-center me-auto">
            <img
              src="/assets/jobfactoryicon.jpg"
              alt=""
              style={{ width: "100px", height: "80px" }}
            />
            {/* <h1 className="sitename">TechUnicorn</h1> */}
          </Link>

          {/* <nav
            id=""
            className="navmenu navbar navbar-expand-lg d-none d-lg-block "
          >
            <ul className="navbar-nav fs-5  ">
              <li className="nav-item">
                <Link to="/" className="nav-link fw-bold" href="#hero">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  to="/about"
                  className="nav-link dropdown-toggle fw-bold"
                  href="about.html"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About
                </Link>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <Link to="/about" className="dropdown-item " href="/">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/team" className="dropdown-item" href="/">
                      Team
                    </Link>
                  </li>
                  <li>
                    <Link to="/testominal" className="dropdown-item" href="/">
                      Testimonials
                    </Link>
                  </li>
                  <li>
                    <Link to="/client" className="dropdown-item" href="/">
                      Client
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link fw-bold" href="/">
                  Services
                </Link>
              </li>

              <li className="nav-item">
                <Link to="/contact" className="nav-link fw-bold" href="/">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScwu2wNTmmrGxhIkR0NyKvf2ZP5klVwDNm2HxDQeo9uX8yfDg/viewform?fbzx=1216962047395808749"
                  className="fw-bold btn"
                  style={{
                    backgroundColor: "#00129e",
                    color: "white",
                    textDecoration: "none",
                    display: "inline-block",
                    padding: "10px 20px",
                    borderRadius: "5px",
                  }}
                >
                  Apply Job
                </a>
              </li>
            </ul>
          </nav> */}

          <nav className="navmenu navbar navbar-expand-lg">
            <ul className="navbar-nav fs-5">
              <li className="nav-item">
                <Link to="/" className="nav-link fw-bold">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link fw-bold">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link fw-bold">
                  Services
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link fw-bold">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLScwu2wNTmmrGxhIkR0NyKvf2ZP5klVwDNm2HxDQeo9uX8yfDg/viewform?fbzx=1216962047395808749"
                  className="fw-bold btn"
                  style={{
                    backgroundColor: "#00129e",
                    color: "white",
                    textDecoration: "none",
                    display: "inline-block",
                    padding: "10px 20px",
                    borderRadius: "5px",
                  }}
                >
                  Apply Job
                </a>
              </li>
            </ul>
          </nav>

          <button
            className="btn btn-danger px-3 bi bi-list d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          ></button>
        </div>

        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link" href="#hero">
                Home
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                to="/about"
                className="nav-link dropdown-toggle"
                href="about.html"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                About
              </Link>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <Link to="/about" className="dropdown-item" href="/">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="dropdown-item" href="/">
                    Team
                  </Link>
                </li>
                <li>
                  <Link to="/testominal" className="dropdown-item" href="/">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link to="/client" className="dropdown-item" href="/">
                    Client
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/services" className="nav-link" href="/">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/portfolio" className="nav-link" href="/">
                Portfolio
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/contact" className="nav-link " href="/">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* <div className="hide mt-5  h-50 w-100 bg-warning">

<h1>djdijdivjds</h1>
<h1>djdijdivjds</h1>
<h1>djdijdivjds</h1>
<h1>djdijdivjds</h1>
<h1>djdijdivjds</h1>
<h1>djdijdivjds</h1>
<h1>djdijdivjds</h1>
</div> */}
      </header>
    </>
  );
}

export default Navbar;
