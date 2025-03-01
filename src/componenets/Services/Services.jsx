import { Link } from "react-alice-carousel";

function Services() {
  return (
    <div>
      <div className="container mt-5 pt-5">
        <h1
          className="display-1"
          style={{
            marginBottom: "1rem",
            fontFamily: "font-title",
            // fontSize: "10rem",
            textTransform: "uppercase",
            letterSpacing: "-0.4px",
            lineHeight: "10rem",
            color: "rgba(255, 255, 255, 0.9)",
            backgroundImage: "linear-gradient(90deg,#1c1c1c,#6220fb)",
            textAlign: "center",
            // backgroundColor: "rgb(145, 205, 255)",
          }}
        >
          Our Services
        </h1>
      </div>

      <div className=" page-title light-background mt-3">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Services</h1>
          <nav className="breadcrumbs"></nav>
        </div>
      </div>

      <section id="services" className="services section my-5">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item d-flex position-relative h-100">
                <i className="bi bi-brush icon flex-shrink-0"></i>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Graphic Design
                    </a>
                  </h4>
                  <p className="description">
                    We create stunning graphic designs to effectively
                    communicate your brand message.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="service-item d-flex position-relative h-100">
                <i className="bi bi-person-workspace icon flex-shrink-0"></i>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Software Testing
                    </a>
                  </h4>
                  <p className="description">
                    We assist individuals in finding bug and errors in software
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-item d-flex position-relative h-100">
                <i className="bi bi-book icon flex-shrink-0"></i>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Training Provide
                    </a>
                  </h4>
                  <p className="description">
                    Comprehensive training programs to enhance your skills and
                    knowledge for career growth.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="service-item d-flex position-relative h-100">
                <i className="bi bi-bar-chart icon flex-shrink-0"></i>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Web Design
                    </a>
                  </h4>
                  <p className="description">
                    Innovative web design services to create engaging user
                    experiences.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-item d-flex position-relative h-100">
                <i className="bi bi-code-slash icon flex-shrink-0"></i>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Web Development
                    </a>
                  </h4>
                  <p className="description">
                    Cutting-edge web development solutions to bring your ideas
                    to life.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <div className="service-item d-flex position-relative h-100">
                <i className="bi bi-phone icon flex-shrink-0"></i>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      App Development
                    </a>
                  </h4>
                  <p className="description">
                    Innovative app development solutions to bring your mobile
                    ideas to life.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <div className="service-item d-flex position-relative h-100">
                <i className="bi bi-box-seam icon flex-shrink-0"></i>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Product Management
                    </a>
                  </h4>
                  <p className="description">
                    Efficient product management to ensure the success of your
                    offerings.
                  </p>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="700"
            >
              <div className="service-item d-flex position-relative h-100">
                <i className="bi bi-megaphone icon flex-shrink-0"></i>
                <div>
                  <h4 className="title">
                    <a href="#" className="stretched-link">
                      Marketing
                    </a>
                  </h4>
                  <p className="description">
                    Strategic marketing solutions to boost your brand visibility
                    and engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
