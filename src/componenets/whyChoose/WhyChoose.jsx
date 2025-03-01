import "bootstrap/dist/css/bootstrap.min.css";

const WhyChoose = () => {
  return (
    <section className="container my-2">
      <h2 className="text-center fw-bold mb-4  display-5 ">
        Why Choose The Job Factory?
      </h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card border-0 h-100 shadow ">
            <img
              src="/assets/why/handshake.jpg"
              className="card-img-top"
              alt="Genuine Connections"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Genuine Connections</h5>
              <p className="card-text">
                At The Job Factory, we are passionate about building authentic
                connections between industries and candidates. Our extensive
                network enables us to connect the right talent with the right
                opportunities.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 h-100 shadow ">
            <img
              src="/assets/why/attractive.jpg"
              className="card-img-top"
              alt="Tailored Training Programs"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Tailored Training Programs</h5>
              <p className="card-text">
                Our training programs are designed to meet the requirements of
                each position, providing candidates with role-specific training
                to excel from day one.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card border-0 h-100 shadow ">
            <img
              src="/assets/why/depositer.jpg"
              className="card-img-top"
              alt="High Selection Ratio"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">High Selection Ratio</h5>
              <p className="card-text">
                Our commitment to quality ensures a higher selection ratio in
                the hiring cycle. We take pride in delivering candidates who not
                only meet but exceed expectations.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-4">
          <div className="card border-0 h-100 shadow ">
            <img
              src="/assets/why/seminarleiter.jpg"
              className="card-img-top"
              alt="High Selection Ratio"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Industry Expertise</h5>
              <p className="card-text">
                Our team comprises industry experts who bring invaluable
                insights and experience to the table. This expertise allows us
                to understand the nuanced needs of different sectors and tailor
                our services accordingly. We stay abreast of industry trends and
                developments, ensuring that our clients benefit from the most
                up-to-date knowledge and best practices.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-4">
          <div className="card border-0 h-100 shadow ">
            <img
              src="assets/why/app.jpg"
              className="card-img-top"
              alt="High Selection Ratio"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">Comprehensive Support</h5>
              <p className="card-text">
                From the initial job search to the final placement, we offer
                comprehensive support to candidates and businesses alike. Our
                holistic approach ensures a smooth and successful hiring process
                for all parties involved. We provide continuous guidance and
                assistance, ensuring that both candidates and employers have the
                resources they need to achieve their goals.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 mt-4">
          <div className="card border-0 h-100 shadow ">
            <img
              src="/assets/why/skill.jpg"

              className="card-img-top"
              alt="High Selection Ratio"
            />
            <div className="card-body">
              <h5 className="card-title fw-bold">
                Career Resources and Advice
              </h5>
              <p className="card-text">
                Job Factory offers extensive career resources and advice,
                including articles, tips, and guides on resumes, cover letters,
                job search strategies, and interviews. The platform also
                provides guidance on career planning, skill development, and
                networking to support users at every stage of their careers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
