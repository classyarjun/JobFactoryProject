import React from "react";
import "./Contact.css";


function Contact() {
  return (
    <div>
      <div className="container mt-5 pt-5">
        <h1
          className="display-1"
          style={{
            marginBottom: "1rem",
            fontFamily: "font-title",
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
          Contact Us
        </h1>
      </div>

      <div
        className="page-title light-background "
        style={{ paddingTop: "80px" }}
      >
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Contact</h1>
          <nav className="breadcrumbs"></nav>
        </div>
      </div>

      <section
        id="contact"
        className="contact section"
        style={{ paddingBottom: "6rem" }}
      >
        <div
          className="container aos-init aos-animate"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div
            className="mb-4 aos-init aos-animate"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1876.4806658106331!2d75.23642049705474!3d19.84158900976832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb9b0026786fd3%3A0x45b4a0d25a260dff!2sThe%20Job%20Factory!5e0!3m2!1sen!2sin!4v1740500293439!5m2!1sen!2sin"
              width="600"
              height="450"
              style={{ border: "0", width: "100%", height: "270px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="row gy-4">
            <div className="col-lg-4">
              <div
                className="info-item d-flex aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>Address</h3>
                  <p>
                    Address: RL-81, 1st Floor, Gavhane Business Hub, Opp. Croma
                    Showroom, Ambedkar Chowk, Bajajnagar, Waluj, Chh.
                    Sambhajinagar, (MH),India-431136
                  </p>
                </div>
              </div>

              <div
                className="info-item d-flex aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Call Us</h3>
                  <p>+91 7350571535</p>
                  {/* <p>+91 </p> */}
                </div>
              </div>

              <div
                className="info-item d-flex aos-init aos-animate"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>Email Us</h3>
                  <p>director@jobfactorys.com</p>
                </div>
              </div>
            </div>

            <div className="col-lg-8">
              <form
                data-aos="fade-up"
                data-aos-delay="200"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                <input
                  type="hidden"
                  name="access_key"
                  value="716e4448-a096-420b-9960-3768f041a8f9"
                />
                <div className="row gy-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      required
                      className="form-control"
                      placeholder="Your Name"
                    />
                  </div>

                  <div className="col-md-6 ">
                    <input
                      type="email"
                      name="email"
                      required
                      className="form-control"
                      placeholder="Your Email"
                    />
                  </div>

                  <div className="col-md-12">
                    <textarea
                      name="message"
                      required
                      className="form-control"
                      rows="6"
                      placeholder="Message"
                    />
                  </div>
                  <input
                    type="checkbox"
                    name="botcheck"
                    className="hidden"
                    style={{ display: "none" }}
                  />
                  <div className="col-md-12 text-start">
                   
                    <button
                      type="submit"
                      className="btn_submit"
                      style={{ borderRadius: ".25rem",textTransform: "uppercase",fontStyle: "normal",
                        fontWeight: 400,paddingRight: "25px", color: "#fff",
                        clipPath:"polygon(0 0,0 0,100% 0,100% 0,100% calc(100% - 15px),calc(100% - 15px) 100%,15px 100%,0 100%)",
                        height: "40px", fontSize: "0.7rem",lineHeight: "14px", letterSpacing: "1.2px",
                        transition: ".2s .1s",backgroundImage:"linear-gradient(90deg,#1c1c1c,#6220fb)",
                        border: "0 solid",overflow: "hidden",
                      }}
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
