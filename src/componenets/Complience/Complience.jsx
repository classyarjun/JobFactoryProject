import "./Compliance.css";

function Compliance()  {
    return (
      <div className="hr-compliance">
        {/* Hero Section */}
        <section className="hero-section bg-light py-5">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-lg-6">
                <h1 className="display-4 fw-bold mb-4">
                  Your Trusted Partner in <span className="text-primary">HR Compliance</span> & 
                  <span className="text-success"> Workforce Solutions</span>
                </h1>
                <p className="lead mb-4">
                  At The Job Factory, we simplify compliance so you can focus on growing your business. 
                  As a trusted provider of end-to-end HR compliance, payroll, and workforce management solutions, 
                  we ensure businesses across industries remain compliant with evolving labor laws and statutory regulations.
                </p>
                <button className="btn btn-primary btn-lg px-4">
                  <i className="bi bi-chat-dots me-2"></i>Get Free Consultation
                </button>
              </div>
              <div className="col-lg-6">
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="HR Team" 
                  className="img-fluid rounded-3 shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>
  
        {/* Why Choose Us */}
        <section className="why-choose py-5 bg-white">
          <div className="container">
            <h2 className="text-center mb-5 fw-bold display-5">Redefining HR Compliance Standards</h2>
            <div className="row g-4">
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm-hover">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-shield-check display-4 text-primary mb-3"></i>
                    <h5>Experienced Compliance Experts</h5>
                    <p className="text-muted">Deep expertise in labor laws & regulatory compliance</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm-hover">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-globe display-4 text-info mb-3"></i>
                    <h5>PAN-India Presence</h5>
                    <p className="text-muted">Seamless compliance solutions across India</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm-hover">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-clock-history display-4 text-warning mb-3"></i>
                    <h5>Quick Inspection Support</h5>
                    <p className="text-muted">Proactive audit & legal check assistance</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card h-100 border-0 shadow-sm-hover">
                  <div className="card-body text-center p-4">
                    <i className="bi bi-gear display-4 text-success mb-3"></i>
                    <h5>Tailored Solutions</h5>
                    <p className="text-muted">Customized to your business needs</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Core Services */}
        <section className="core-services py-5 bg-light">
          <div className="container">
            <h2 className="text-center mb-5 fw-bold display-5">Our Core Services</h2>
            <div className="row g-4">
              {/* Service 1 */}
              <div className="col-md-6 col-lg-4">
                <div className="service-card bg-white p-4 rounded-3 h-100 shadow-sm">
                  <div className="icon-wrapper bg-primary text-white rounded-circle mb-3">
                    <i className="bi bi-building-gear fs-4"></i>
                  </div>
                  <h4>Statutory Compliance Management</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Compliance audits & risk assessments
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      EPF, ESIC, PT, MLWF compliance
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Factory Act licensing & gratuity
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Maternity benefits & wage regulations
                    </li>
                  </ul>
                </div>
              </div>
  
              {/* Service 2 */}
              <div className="col-md-6 col-lg-4">
                <div className="service-card bg-white p-4 rounded-3 h-100 shadow-sm">
                  <div className="icon-wrapper bg-info text-white rounded-circle mb-3">
                    <i className="bi bi-calculator fs-4"></i>
                  </div>
                  <h4>Payroll Processing Solutions</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Accurate payroll processing
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      TDS calculations & tax filings
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Labor law portal integration
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Comprehensive payslip management
                    </li>
                  </ul>
                </div>
              </div>
  
              {/* Service 3 */}
              <div className="col-md-6 col-lg-4">
                <div className="service-card bg-white p-4 rounded-3 h-100 shadow-sm">
                  <div className="icon-wrapper bg-warning text-white rounded-circle mb-3">
                    <i className="bi bi-clipboard-check fs-4"></i>
                  </div>
                  <h4>Labor Law Advisory & Audits</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      HR policy development
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      POSH policy implementation
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Contract labor regulations
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Compliance training programs
                    </li>
                  </ul>
                </div>
              </div>
  
              {/* Service 4 */}
              <div className="col-md-6 col-lg-4">
                <div className="service-card bg-white p-4 rounded-3 h-100 shadow-sm">
                  <div className="icon-wrapper bg-success text-white rounded-circle mb-3">
                    <i className="bi bi-heart-pulse fs-4"></i>
                  </div>
                  <h4>Employee Benefits & Claims</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      PF withdrawals & ESI benefits
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Gratuity & superannuation
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Wage calculations & settlements
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Employee claim assistance
                    </li>
                  </ul>
                </div>
              </div>
  
              {/* Service 5 */}
              <div className="col-md-6 col-lg-4">
                <div className="service-card bg-white p-4 rounded-3 h-100 shadow-sm">
                  <div className="icon-wrapper bg-danger text-white rounded-circle mb-3">
                    <i className="bi bi-person-workspace fs-4"></i>
                  </div>
                  <h4>Consultancy & Training</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Workforce compliance training
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Labor law updates workshops
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Policy implementation support
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Regulatory change management
                    </li>
                  </ul>
                </div>
              </div>
  
              {/* Service 6 */}
              <div className="col-md-6 col-lg-4">
                <div className="service-card bg-white p-4 rounded-3 h-100 shadow-sm">
                  <div className="icon-wrapper bg-secondary text-white rounded-circle mb-3">
                    <i className="bi bi-file-earmark-bar-graph fs-4"></i>
                  </div>
                  <h4>Vendor Audit & Compliance</h4>
                  <ul className="list-unstyled">
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Vendor compliance verification
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Third-party audits
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Legal obligation assurance
                    </li>
                    <li className="mb-2">
                      <i className="bi bi-check2-circle text-success me-2"></i>
                      Documentation support
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Process Section */}
        <section className="process py-5 bg-white">
          <div className="container">
            <div className="row align-items-center g-5">
              <div className="col-md-6">
                <img 
                  src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Compliance Process" 
                  className="img-fluid rounded-3 shadow"
                />
              </div>
              <div className="col-md-6">
                <h2 className="fw-bold display-6 mb-4">Our Compliance Process</h2>
                <div className="process-steps">
                  <div className="step d-flex mb-4">
                    <div className="step-icon bg-primary text-white rounded-circle me-4">
                      <i className="bi bi-clipboard-data fs-4"></i>
                    </div>
                    <div>
                      <h5>Comprehensive Assessment</h5>
                      <p className="text-muted mb-0">Detailed analysis of your current compliance status</p>
                    </div>
                  </div>
                  <div className="step d-flex mb-4">
                    <div className="step-icon bg-success text-white rounded-circle me-4">
                      <i className="bi bi-tools fs-4"></i>
                    </div>
                    <div>
                      <h5>Solution Implementation</h5>
                      <p className="text-muted mb-0">Customized strategy development and execution</p>
                    </div>
                  </div>
                  <div className="step d-flex mb-4">
                    <div className="step-icon bg-warning text-white rounded-circle me-4">
                      <i className="bi bi-graph-up fs-4"></i>
                    </div>
                    <div>
                      <h5>Ongoing Monitoring</h5>
                      <p className="text-muted mb-0">Continuous compliance tracking and updates</p>
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
  
  // CSS Styles
  export default  Compliance