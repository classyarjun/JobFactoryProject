import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import WhyChoose from "../whyChoose/WhyChoose";

const items = [
  {
    id: 1,
    image: "assets/herocarousel/a5.jpg",
    heading: "Welcome to Our Platform",
    paragraph: "Discover the amazing features we have to offer.",
    buttonText: "Get Started",
  },
  {
    id: 2,
    image: "assets/herocarousel/a2.jpg",
    heading: "Join Us Today",
    paragraph: "Sign up and enjoy exclusive benefits and resources.",
    buttonText: "Sign Up Now",
  },
  {
    id: 3,
    image: "assets/herocarousel/a3.jpg",
    heading: "Explore Your Knowledge",
    paragraph: "Find the right solutions tailored just for you.",
    buttonText: "Learn More",
  },
  {
    id: 3,
    image: "assets/herocarousel/a1.jpg",
    heading: "Explore Opportunities",
    paragraph: "Find the right solutions tailored just for you.",
    buttonText: "Learn More",
  },
  {
    id: 3,
    image: "assets/herocarousel/a1.jpg",
    heading: "Explore Opportunities",
    paragraph: "Find the right solutions tailored just for you.",
    buttonText: "Learn More",
  },
];

const Home = () => {
  const responsive = {
    0: { items: 1 },
    600: { items: 1 },
    1024: { items: 1 },
  };

  const carouselRef = React.useRef(null);

  return (
    <>
    <div className="container-fluid mt-5" style={{marginTop:"50px"}}>
      <div className="row justify-content-center align-items-center">
        <div className="col-12 position-relative">
          <AliceCarousel
            responsive={responsive}
            mouseTracking
            disableDotsControls
            disableButtonsControls
            autoPlay
            infinite
            autoPlayInterval={2000}
            ref={carouselRef}
            className="carousel slide"
          >
            {items.map((item) => (
              <div
                key={item.id}
                className="carousel-item active position-relative"
                style={{ height: "92vh" }}
              >
                <img
                  src={item.image}
                  alt={`Image ${item.id}`}
                  className="d-block w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
                <div
                  className="carousel-caption d-flex flex-column justify-content-center align-items-center text-center"
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "rgba(0, 0, 0, 0.4)",
                    color: "#fff",
                  }}>
                  <div className="content" style={{ backgroundColor:"rgba(99, 172, 255, 0.4)", backdropFilter: "blur(10px)", padding: "20px", borderRadius: "10px" }}>
                  <h1 className="text-white fw-bold">{item.heading}</h1>
                  <p>{item.paragraph}</p>
                  <button className="btn btn-danger text-light ">{item.buttonText}</button>
                </div>
                </div>
              </div>
            ))}
          </AliceCarousel>
        </div>
      </div>
    </div>




<div className="servicessection p-5">
      <div className="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Services</h2>
        <p>Our <span className="description-title text-primary">Services</span></p>
      </div>

 <section id="services" className="services section">

<div className="container">

  <div className="row gy-4">

    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
      <div className="service-item d-flex position-relative h-100">
        <i className="bi bi-brush icon flex-shrink-0"></i>
        <div>
          <h4 className="title"><a href="#" className="stretched-link">Graphic Design</a></h4>
          <p className="description">We create stunning graphic designs to effectively communicate your brand message.</p>
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

    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">
      <div className="service-item d-flex position-relative h-100">
        <i className="bi bi-book icon flex-shrink-0"></i>
        <div>
          <h4 className="title"><a href="#" className="stretched-link">Training Provide</a></h4>
          <p className="description">Comprehensive training programs to enhance your skills and knowledge for career growth.</p>
        </div>
      </div>
    </div>

    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="400">
      <div className="service-item d-flex position-relative h-100">
        <i className="bi bi-bar-chart icon flex-shrink-0"></i>
        <div>
          <h4 className="title"><a href="#" className="stretched-link">Web Design</a></h4>
          <p className="description">Innovative web design services to create engaging user experiences.</p>
        </div>
      </div>
    </div>
    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="500">
      <div className="service-item d-flex position-relative h-100">
        <i className="bi bi-code-slash icon flex-shrink-0"></i>
        <div>
          <h4 className="title"><a href="#" className="stretched-link">Web Development</a></h4>
          <p className="description">Cutting-edge web development solutions to bring your ideas to life.</p>
        </div>
      </div>
    </div>

    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="800">
            <div className="service-item d-flex position-relative h-100">
              <i className="bi bi-phone icon flex-shrink-0"></i>
              <div>
                <h4 className="title"><a href="#" className="stretched-link">App Development</a></h4>
                <p className="description">Innovative app development solutions to bring your mobile ideas to life.</p>
              </div>
            </div>
          </div>

    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="600">
      <div className="service-item d-flex position-relative h-100">
        <i className="bi bi-box-seam icon flex-shrink-0"></i>
        <div>
          <h4 className="title"><a href="#" className="stretched-link">Product Management</a></h4>
          <p className="description">Efficient product management to ensure the success of your offerings.</p>
        </div>
      </div>
    </div>

    <div className="col-md-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="700">
      <div className="service-item d-flex position-relative h-100">
        <i className="bi bi-megaphone icon flex-shrink-0"></i>
        <div>
          <h4 className="title"><a href="#" className="stretched-link">Marketing</a></h4>
          <p className="description">Strategic marketing solutions to boost your brand visibility and engagement.</p>
        </div>
      </div>
    </div>

  </div>

</div>

      </section>
</div>

            <WhyChoose/>


<div className="teamsection p-5">
      <div className="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Team</h2>
        <p>Meet Our <span className="description-title text-primary">Team</span></p>
      </div>

      <section id="team" className="team section">

<div className="container">

  <div className="row gy-4">


  <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
      <div className="team-member d-flex align-items-start">
        <div className="pic"><img src="assets/team/Karan-Rajput-Ai.jpg" className="img-fluid" alt=""/></div>
        <div className="member-info">
          <h4 className="text-primary">Karan Rajput</h4>
          <span className="fw-bold">Software Developer</span>
          <p style={{ textAlign: 'justify' }}>Karan Rajput is a skilled Senior Software Developer with expertise in software development and system architecture. He delivers quality solutions and has a proven track record of successful projects, making him a valuable team member.</p>
          <div className="social">
            <a href="#"><i className="bi bi-twitter-x"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>


  <div className="col-lg-6 aos-init aos-animate" data-aos="fade-up" data-aos-delay="200">
      <div className="team-member d-flex align-items-start">
        <div className="pic"><img src="assets/team/ArjunRajput-Photoroom.jpg" className="img-fluid" alt=""/></div>
        <div className="member-info">
          <h4 className="text-primary">Arjun Rajput</h4>
          <span className="fw-bold">Software Developer</span>
          <p style={{ textAlign: 'justify' }}>Arjun Rajput is a skilled Senior Software Developer with expertise in software development and system architecture. He delivers quality solutions and has a proven track record of successful projects, making him a valuable team member.</p>
          <div className="social">
            <a href=""><i className="bi bi-twitter-x"></i></a>
            <a href=""><i className="bi bi-facebook"></i></a>
            <a href=""><i className="bi bi-instagram"></i></a>
            <a href=""> <i className="bi bi-linkedin"></i> </a>
          </div>
        </div>
      </div>
    </div>

   
  </div>

</div>

</section>
</div>


<div className="partnerssection p-5">
      <div className="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Partners</h2>
        <p>Our <span className="description-title text-primary">Clients</span></p>
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
              <img
                src="assets/clients/adp.png"
                className="img-fluid"
                alt=""
              />
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
              <img
                src="assets/clients/cnx.png"
                className="img-fluid"
                alt=""
              />
            </div>

            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets/clients/atos.png"
                className="img-fluid"
                alt=""
              />
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
              <img
                src="assets/clients/gtl.jpg"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-xl-2 col-md-3 col-6 client-logo">
              <img
                src="assets/clients/hcl.png"
                className="img-fluid"
                alt=""
              />
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


<div className="Contactsection p-5">
      <div className="container section-title aos-init aos-animate" data-aos="fade-up">
        <h2>Contact</h2>
        <p>Contact <span className="description-title text-primary">Now</span></p>
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
                  Address: RL-81, 1st Floor, Gavhane Business Hub, Opp.
                  Croma Showroom, Ambedkar Chowk, Bajajnagar, Waluj,
                  Chh. Sambhajinagar, (MH),India-431136</p>
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

  

 
  
    </>
  );
};

export default Home;
