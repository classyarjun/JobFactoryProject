import { Link } from "react-router";

function Contact() {
  return (
    <div>
      <div
        className="page-title light-background "
        style={{ paddingTop: "80px" }}
      >
        <div className="container d-lg-flex justify-content-between align-items-center">
          <h1 className="mb-2 mb-lg-0">Contact</h1>
          <nav className="breadcrumbs">
            <ol>
              <li>
                <Link to="/" href="index.html">
                  Home
                </Link>
              </li>
              <li className="current">Contact</li>
            </ol>
          </nav>
        </div>
      </div>

      <section id="contact" className="contact section">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3752.2327832836468!2d75.3527467!3d19.8723901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdba3838a8879df%3A0xd61cce555f66bc48!2sAccha%20Jobs!5e0!3m2!1sen!2sin!4v1735015936564!5m2!1sen!2sin"
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
                  <p>Golden Rocks, Plot No. 21,22, Vijay Nagar, Gajanan Maharaj Mandir Rd, behind Arihant Honda Services / Yalla Yalla Hotel, CHH, Chhatrapati Sambhaji Nagar, Maharashtra 431005</p>
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
                  <p>+91 9143973973</p>
                  <p>+91 9921037299</p>
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
                  <p>sudeep.m87@gmail.com</p>
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
                  value="453be0f5-4893-456a-aba3-651e276656e9"
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
                  <div className="col-md-12 text-center">
                    <button type="submit" className="btn btn-primary">
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
