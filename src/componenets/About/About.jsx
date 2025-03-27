import Missionvision from "../Misionvision/Missionvision";
import "./About.css";
import Abouttest from "./Abouttest";

function About() {
  return (
<>
<div className="container mt-5 pt-5">
<h1 className="display-1" style={{ 
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
     }}>
        About Us
     </h1>
</div>

    <section className="about-section pb-5">
      <div className="container">
        <div className="about-content">
          <div className="about-header">
            <h2 className="section-title">
              MEET OUR <span className="highlight">CEO</span>
            </h2>
            <div className="title-line"></div>
          </div>

          <div className="profile-card">
            <div className="profile-image">
              <img 
                src="assets/abhishek.jpg" 
                alt="Abhishek Sule" 
                className="ceo-image"
              />
              <div className="image-overlay"></div>
            </div>

            <div className="profile-info">
              <div className="glassmorphism-panel">
                <h3 className="ceo-greeting">Welcome to The Job Factory</h3>
                <p className="ceo-message">
                As the Director of The Job Factory, it gives me immense pleasure
              to introduce you to our organization. Our journey began in 2024
              with a clear vision: to bridge the gap between talented candidates
              and industry needs. Having served various industries over the past
              decade, I have witnessed firsthand the challenges businesses face
              in finding the right talent. This inspired the creation of The Job
              Factory, where we are committed to providing functionally trained
              professionals who are perfectly suited to their roles. Our mission
              is to connect industries with ideal candidates through meticulous
              selection and specialized training. We focus on preparation,
              precision, and performance to ensure every candidate excels in
              their role. At The Job Factory, we strive to create genuine
              connections between candidates and employers, fostering
              relationships that lead to mutual growth and success. Thank you
              for choosing The Job Factory. We look forward to partnering with
              you to achieve your goals and drive success. Warm regards,
                </p>
                
                <div className="signature-block">
                  <h4 className="ceo-name">Abhishek Sule</h4>
                  <p className="ceo-title">Founder & CEO</p>
                  <div className="decorative-line"></div>
                </div>
              </div>

              <div className="floating-element-1"></div>
              <div className="floating-element-2"></div>
            </div>
          </div>
        </div>
      </div>
    <Missionvision/>
    <Abouttest/>
    </section>

    </>
  );
}

export default About;