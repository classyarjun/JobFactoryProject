import './Missionvission.css'


function Missionvision() {
  return (
    <>
     <div className="main-container p-4">
      <h2 className="section-heading text-black">Job Factory</h2>
      <p className="sub-text fw-bold">Empowering the Leaders of Tomorrow..</p>
      <p className="sub-text">
        Explore a wide range of job opportunities tailored to your skills and
        aspirations. Start your journey towards a fulfilling career today!
      </p>

      <div className="container mt-4 d-flex justify-content-center">
        <div className="">
           {/* Vision Section */}
          <div className="row vision justify-content-center">
            <div className="col-md-6 image-container">
              <img
                src="https://mlbogetgjoyo.i.optimole.com/w:1200/h:675/q:mauto/f:best/https://sihanyaprofadvs.co.ke/wp-content/uploads/2023/02/Lawyers-Public-Interest-Lawyering-and-Constitutional-Democracy-in-Kenya-And-Africa.jpg"
                alt="Vision"
              />
            </div>
            <div className="col-md-6 text-content pt-5 px-5">
              <h4 className="fw-bold" style={{color:'red'}}>Our Vision</h4>
              <p>
                To eliminate the gap between industry needs and candidate
                capabilities, creating a future where every candidate is
                perfectly matched with their role and every business has access
                to skilled professionals.
              </p>
            </div>
          </div>

         {/* Mission Section */}
          <div className="row mission justify-content-center mt-5">
            <div className="col-md-6 text-content p-5">
              <h4 className="fw-bold text-primary">Our Mission</h4>
              <p>
                To connect industries with ideal candidates through preparation,
                precision, and performance, providing top-tier talent and
                specialized training to enhance hiring efficiency and success.
              </p>
            </div>
            <div className="col-md-6 image-container">
              <img
                src="https://www.pmachadolaw.com/uploads/6/5/4/6/65469251/criminal_orig.jpeg"
                alt="Mission"
              />
            </div>
          </div>
        </div>
      </div>
    </div>


    
    </>
  )
}

export default Missionvision





   