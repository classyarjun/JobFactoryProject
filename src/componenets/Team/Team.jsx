import { Link } from "react-router";

function Team() {
  return (
    <div>
      <div
        className=" page-title light-background "
        style={{ paddingTop: "80px" }}
      >
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0 ">Our Team</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="current">Team</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="team" className="team section">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="assets/team/Karan-Rajput-Ai.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4 className="text-danger">Karan Rajput</h4>
                  <span className="fw-bold">Software Developer</span>
                  <p style={{ textAlign: "justify" }}>
                    Karan Rajput is a skilled Senior Software Developer with
                    expertise in software development and system architecture.
                    He delivers quality solutions and has a proven track record
                    of successful projects, making him a valuable team member.
                  </p>
                  <div className="social">
                    <a href="#">
                      <i className="bi bi-twitter-x"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-instagram"></i>
                    </a>
                    <a href="#">
                      <i className="bi bi-linkedin"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>

           

            <div
              className="col-lg-6 aos-init aos-animate"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="team-member d-flex align-items-start">
                <div className="pic">
                  <img
                    src="assets/team/ArjunRajput-Photoroom.jpg"
                    className="img-fluid"
                    alt=""
                  />
                </div>
                <div className="member-info">
                  <h4 className="text-danger">Arjun Rajput</h4>
                  <span className="fw-bold">Software Developer</span>
                  <p style={{ textAlign: "justify" }}>
                    Arjun Rajput is a skilled Senior Software Developer with
                    expertise in software development and system architecture.
                    He delivers quality solutions and has a proven track record
                    of successful projects, making him a valuable team member.
                  </p>
                  <div className="social">
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
                      {" "}
                      <i className="bi bi-linkedin"></i>{" "}
                    </a>
                  </div>
                </div>
              </div>
            </div>

        
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
