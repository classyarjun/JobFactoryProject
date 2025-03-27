import "./abouttest.css";

function Abouttest() {
    return (
      <div className="about-page">
        {/* Hero Section */}
        <section className="hero-section bg-light py-5">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6 order-lg-1">
                <h1 className="display-4 fw-bold mb-3">
                  About <span className="text-primary">The Job Factory</span>
                </h1>
                <h2 className="h3 text-secondary mb-4">
                  Your Trusted Partner in Recruitment, Compliance & IT Solutions
                </h2>
                <p className="lead">
                  Founded with a vision to bridge the gap between businesses and skilled professionals, 
                  The Job Factory offers integrated solutions for workforce management, legal compliance, 
                  and digital transformation.
                </p>
              </div>
              <div className="col-lg-6 order-lg-2">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Team Collaboration" 
                  className="img-fluid rounded-3 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
  
        {/* Who We Are */}
        <section className="who-we-are py-5 bg-white">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 text-center">
                <div className="section-header mb-5">
                  <h2 className="display-5 fw-bold mb-3">Who We Are</h2>
                  <div className="divider mx-auto bg-primary"></div>
                </div>
                <p className="lead text-muted mb-5">
                  At The Job Factory, we empower businesses through:
                </p>
                
                <div className="row g-4 text-start">
                  <div className="col-md-4">
                    <div className="h-100 p-4 border-start border-3 border-primary">
                      <h4 className="text-primary mb-3">Talent Solutions</h4>
                      <p>Connecting companies with skilled professionals across industries</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="h-100 p-4 border-start border-3 border-success">
                      <h4 className="text-success mb-3">Compliance Assurance</h4>
                      <p>Ensuring legal security through HR compliance management</p>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="h-100 p-4 border-start border-3 border-info">
                      <h4 className="text-info mb-3">IT Innovation</h4>
                      <p>Delivering cost-effective digital transformation solutions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Core Services */}
        <section className="core-services py-5 bg-light">
          <div className="container">
            <div className="section-header text-center mb-5">
              <h2 className="display-5 fw-bold">Our Core Services</h2>
              <p className="lead text-muted">Comprehensive solutions for modern business needs</p>
            </div>
  
            {/* Recruitment Services */}
            <div className="row g-4 mb-5">
              <div className="col-lg-4">
                <div className="service-header bg-primary text-white p-4 rounded-3">
                  <i className="bi bi-people fs-1 mb-3"></i>
                  <h3>Recruitment & Workforce Solutions</h3>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="h-100 p-4 bg-white rounded-3 shadow-sm">
                      <h5 className="text-primary mb-3">Industry Expertise</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Manufacturing
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          IT & Technology
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Retail & Healthcare
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-check-circle-fill text-success me-2"></i>
                          Automotive
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="h-100 p-4 bg-white rounded-3 shadow-sm">
                      <h5 className="text-primary mb-3">Our Offerings</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <i className="bi bi-person-check-fill text-info me-2"></i>
                          Permanent & Contract Staffing
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-briefcase-fill text-info me-2"></i>
                          Executive Search
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-mortarboard-fill text-info me-2"></i>
                          Campus Recruitment
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-gear-fill text-info me-2"></i>
                          Custom Talent Solutions
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* Compliance Services */}
            <div className="row g-4 mb-5">
              <div className="col-lg-4 order-lg-2">
                <div className="service-header bg-success text-white p-4 rounded-3">
                  <i className="bi bi-shield-check fs-1 mb-3"></i>
                  <h3>Compliance Management</h3>
                </div>
              </div>
              <div className="col-lg-8 order-lg-1">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="h-100 p-4 bg-white rounded-3 shadow-sm">
                      <h5 className="text-success mb-3">Core Compliance</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <i className="bi bi-file-earmark-medical-fill text-success me-2"></i>
                          Labor Law Advisory & Audits
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-calculator-fill text-success me-2"></i>
                          Payroll Management
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-heart-pulse-fill text-success me-2"></i>
                          Employee Benefits
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-building-check-fill text-success me-2"></i>
                          Vendor Compliance
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="h-100 p-4 bg-white rounded-3 shadow-sm">
                      <h5 className="text-success mb-3">Specialized Services</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <i className="bi bi-graph-up-arrow text-success me-2"></i>
                          Statutory Compliance
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-file-text-fill text-success me-2"></i>
                          Claims Management
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-person-video3 text-success me-2"></i>
                          Workforce Training
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-clipboard2-check-fill text-success me-2"></i>
                          Legal Documentation
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            {/* IT Solutions */}
            <div className="row g-4">
              <div className="col-lg-4">
                <div className="service-header bg-info text-white p-4 rounded-3">
                  <i className="bi bi-code-square fs-1 mb-3"></i>
                  <h3>IT Solutions</h3>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row g-4">
                  <div className="col-md-6">
                    <div className="h-100 p-4 bg-white rounded-3 shadow-sm">
                      <h5 className="text-info mb-3">Development Services</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <i className="bi bi-globe text-info me-2"></i>
                          Web & App Development
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-bug-fill text-info me-2"></i>
                          Software Testing & QA
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-palette-fill text-info me-2"></i>
                          UI/UX Design
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-images text-info me-2"></i>
                          Graphic Designing
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="h-100 p-4 bg-white rounded-3 shadow-sm">
                      <h5 className="text-info mb-3">Technical Expertise</h5>
                      <ul className="list-unstyled">
                        <li className="mb-2">
                          <i className="bi bi-cloud-arrow-up-fill text-info me-2"></i>
                          Cloud Solutions
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-terminal-fill text-info me-2"></i>
                          DevOps Services
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-shield-lock-fill text-info me-2"></i>
                          Cybersecurity
                        </li>
                        <li className="mb-2">
                          <i className="bi bi-cpu-fill text-info me-2"></i>
                          Tech Consulting
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="cta-section bg-dark text-white py-5">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h2 className="display-6 fw-bold mb-4">Transform Your Business Today</h2>
                <p className="lead mb-4">
                  Partner with us for integrated workforce solutions that drive growth and compliance
                </p>
                <div className="d-flex gap-3 justify-content-center">
                  <button className="btn btn-primary btn-lg px-4">
                    <i className="bi bi-telephone-outbound me-2"></i>
                    Schedule Consultation
                  </button>
                  <button className="btn btn-outline-light btn-lg px-4">
                    <i className="bi bi-chat-dots me-2"></i>
                    Contact Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
  
  export default Abouttest
 