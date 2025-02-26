import { Link } from "react-router";
import Director from "../Director/Director";

function About() {
  return (
    <>
      <div className=" page-title light-background " style={{paddingTop:'80px'}}>
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">About</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
              <Link to="/" >Home</Link>
               
              </li>
              <li className="current">About</li>
            </ol>
          </nav>
        </div>
      </div>

<section id="about-2" className="about-2 section">
  <div className="container aos-init aos-animate" data-aos="fade-up">
    
  <div className=" my-5">
        <h2 className="display-6 fw-bold">MEET OUR <span className="text-primary">CEO
        </span></h2>
      </div>
    <div
      className="row g-4 g-lg-5 aos-init aos-animate"
      data-aos="fade-up"
      data-aos-delay="200"
    >
      <div className="col-lg-6">
        <div className=" ">
          <img
            src="assets/abhishek.jpg"
            className="img-fluid rounded-5 "
            alt="CEO Photo" 
          />
        </div>
      </div>

      <div className="col-lg-6">

        <h4 className="">
          Driving Excellence, Innovation, and Growth
        </h4>

        <ul className="nav nav-pills mb-3" role="tablist">
          <li>
            <a
              className="nav-link active"
              data-bs-toggle="pill"
              href="#about-2-tab1"
              aria-selected="true"
              role="tab"
            >
              Our Journey
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              data-bs-toggle="pill"
              href="#about-2-tab2"
              aria-selected="false"
              role="tab"
              tabIndex="-1"
            >
              Our Vision
            </a>
          </li>
          <li>
            <a
              className="nav-link"
              data-bs-toggle="pill"
              href="#about-2-tab3"
              aria-selected="false"
              role="tab"
              tabIndex="-1"
            >
              Our Mission
            </a>
          </li>
        </ul>

        <div className="tab-content">
          {/* Our Journey */}
          <div
            className="tab-pane fade active show"
            id="about-2-tab1"
            role="tabpanel"
          >
            <p className="fst-italic fs-5">
              Under the leadership of <span className="fw-bold">Abhishek Sule</span>, we embarked on a journey of
              transformative growth, embracing innovation and operational
              excellence. With a results-driven approach, we have built a strong
              foundation for future success, ensuring stakeholder value at every
              step.
            </p>
            <div className="d-flex align-items-center mt-4 ">
              <i className="bi bi-check2"></i>
              <h4>Embraced transformative innovation for sustainable growth.</h4>
            </div>
            <div className="d-flex align-items-center mt-4">
              <i className="bi bi-check2"></i>
              <h4>Ensured stakeholder value through strategic initiatives.</h4>
            </div>
            <div className="d-flex align-items-center mt-4">
              <i className="bi bi-check2"></i>
              <h4>Built a culture of excellence and collaboration.</h4>
            </div>
          </div>

          {/* Our Vision */}
          <div
            className="tab-pane fade"
            id="about-2-tab2"
            role="tabpanel"
          >
            <p className="fst-italic fs-5">
              Our vision is to become a globally recognized organization known
              for innovation, operational excellence, and sustainable growth.
              We strive to empower individuals and create lasting value for all
              stakeholders.
            </p>
            <div className="d-flex align-items-center mt-4">
              <i className="bi bi-check2"></i>
              <h4>Set benchmarks in operational excellence.</h4>
            </div>
            <div className="d-flex align-items-center mt-4">
              <i className="bi bi-check2"></i>
              <h4>Empowered individuals to reach their full potential.</h4>
            </div>
            <div className="d-flex align-items-center mt-4">
              <i className="bi bi-check2"></i>
              <h4>Established global recognition through innovation.</h4>
            </div>
          </div>

          {/* Our Mission */}
          <div
            className="tab-pane fade"
            id="about-2-tab3"
            role="tabpanel"
          >
            <p className="fst-italic fs-5">
              Our mission is to lead with strategic vision, foster innovation,
              and deliver impactful solutions that drive growth and stakeholder
              value, while maintaining a commitment to excellence and
              collaboration.
            </p>
            <div className="d-flex align-items-center mt-4">
              <i className="bi bi-check2"></i>
              <h4>Deliver innovative and impactful solutions.</h4>
            </div>
            <div className="d-flex align-items-center mt-4">
              <i className="bi bi-check2"></i>
              <h4>Focus on long-term success and stakeholder value.</h4>
            </div>
            <div className="d-flex align-items-center mt-4">
              <i className="bi bi-check2"></i>
              <h4>Promote collaboration and operational excellence.</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
{/* <Director/> */}

    </>
  );
}

export default About;
