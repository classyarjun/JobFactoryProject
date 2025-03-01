import { Link } from "react-router";

function Client() {
  return (
    <div>
      <div className="container mt-5 pt-5">
        <h1 className="display-1"
          style={{
            marginBottom: "1rem",
            fontFamily: "font-title",
            // fontSize: "10rem",
            fontWeight: "100",
            textTransform: "uppercase",
            letterSpacing: "-0.4px",
            lineHeight: "10rem",
            color: "rgba(255, 255, 255, 0.9)",
            backgroundImage: "linear-gradient(90deg,#1c1c1c,#6220fb)",
            textAlign: "center",
            // backgroundColor: "rgb(145, 205, 255)",
          }}
        >
          Our Clients
        </h1>
      </div>

      <div className=" page-title light-background pt-5">
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Clients</h1>
          <nav className="breadcrumbs"></nav>
        </div>
      </div>
      <section id="clients" className="clients section light-background">
        <div className="container aos-init aos-animate" data-aos="fade-up">
          <div className="row gy-4">
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets/clients/amdocs.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img src="assets/clients/adp.png" className="img-fluid" alt="" />
            </div>

            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets/clients/cisco.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets/clients/Cybage.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img src="assets/clients/cnx.png" className="img-fluid" alt="" />
            </div>

            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img src="assets/clients/atos.png" className="img-fluid" alt="" />
            </div>

            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets/clients/Accenture.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets/clients/virtusa.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img src="assets/clients/gtl.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img src="assets/clients/hcl.png" className="img-fluid" alt="" />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets/clients/Openfuture.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets/clients/quantumsoft.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets/clients/NTT Data.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets/clients/synechron.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets/clients/Zensar Technologies.webp"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets/clients/wipro.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets/clients/Honeywell.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets/clients/Fujitsu.png"
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Client;
