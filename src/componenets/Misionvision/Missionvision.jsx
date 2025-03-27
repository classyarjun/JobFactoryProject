function Missionvision() {
  return (
    <div className="container py-5">
      <div className="main-container">
        <h2 className="display-5 fw-bold text-center mb-4">
          The Job Factory – Your Partner in Cost-Effective IT Solutions
        </h2>
        <p className="lead text-center mb-5">
          Expanding Horizons, Empowering Businesses
        </p>

        <div className="row justify-content-center mb-5">
          <div className="col-lg-8 text-center">
            <p className="fs-5 text-muted">
              At The Job Factory, we bring innovative, cost-effective, and
              high-quality IT solutions tailored to your business needs. From
              web development to DevOps, we provide cutting-edge technology
              services that help businesses scale efficiently while maintaining
              cost-effectiveness.
            </p>
          </div>
        </div>

        {/* Vision Section */}
        <div className="row align-items-center g-5 mb-5">
          <div className="col-lg-6 order-lg-1">
            <div className="vision-image shadow-lg rounded-4 overflow-hidden">
              <img
                src="https://mlbogetgjoyo.i.optimole.com/w:1200/h:675/q:mauto/f:best/https://sihanyaprofadvs.co.ke/wp-content/uploads/2023/02/Lawyers-Public-Interest-Lawyering-and-Constitutional-Democracy-in-Kenya-And-Africa.jpg"
                alt="Vision"
                className="img-fluid"
              />
            </div>
          </div>
          <div className="col-lg-6 order-lg-2">
            <div className="ps-lg-5">
              <h3 className="fw-bold text-danger mb-4">Our Vision</h3>
              <p className="fs-5 text-secondary">
                To be a leading IT solutions provider, offering affordable,
                innovative, and reliable technology services that empower
                businesses to achieve digital excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="row align-items-center g-5">
          <div className="col-lg-6">
            <div className="pe-lg-5">
              <h3 className="fw-bold text-primary mb-4">Our Mission</h3>
              <p className="fs-5 text-secondary">
                <span>
                  {" "}
                  To deliver high-quality and cost-effective IT solutions that
                  enhance business growth.
                </span>
                <br />
                <span>
                  {" "}
                  To leverage the latest technologies and industry best
                  practices to create value-driven solutions.
                </span>
                <br />
                <span>
                  {" "}
                  To foster long-term partnerships by ensuring customer
                  satisfaction and continuous innovation.
                </span>
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mission-image shadow-lg rounded-4 overflow-hidden">
              <img
                src="assets/rendering-arrow-hitting-target.jpg"
                alt="Mission"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Missionvision;
