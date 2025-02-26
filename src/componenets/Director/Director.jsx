const Director = () => {
  return (
    <>
      <div className="container director-page bg-light py-5 mt-5">
        <div className=" ">
          <h2 className="display-6 px-4 fw-bold">
            MEET OUR <span className="fw-bold text-danger">DIRECTOR</span>
          </h2>
        </div>
        <div className="row align-items-center profile-section">
          <div className="col-md-8 p-5">
            <h2 className="name fw-bold">Nilima Mahore</h2>
            <p className="title text-muted">Director & Visionary Leader</p>
            <p className="bio  text-align-justify">
              Nilima Mahore is the founder and director of the company. She has
              over 5 years of experience in the IT industry, with a focus on
              software development and digital transformation. Nilima is a
              passionate advocate for innovation and technology, and is
              dedicated to helping businesses succeed through the use of
              cutting-edge solutions.
            </p>
            <p className="vision font-italic text-align-justify">
              Our mission is to empower individuals and businesses through
              cutting-edge technology, fostering a culture of innovation and
              excellence.
            </p>
            
              <div className="social-links d-flex mt-4 gap-4">
                <a href="">
                  <i className="bi bi-twitter-x "></i>
                </a>
                <a href="">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
           
          </div>
          <div className="col-md-4 text-center">
            <img
              src="assets/team/directors.jpg"
              alt="Director"
              className="img-fluid rounded-5  "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Director;
