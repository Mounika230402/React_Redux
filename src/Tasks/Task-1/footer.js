import React from "react"
// import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';

const Footer = () => {
  return (
    <>
    
    <footer className="text-center text-lg-start bg-body-tertiary text-muted">
      
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
      
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>
      
        <div>
          <Nav.Link href="#" className="me-4 text-reset">
            <i className="fab fa-facebook-f" />
          </Nav.Link>
          <Nav.Link href="#" className="me-4 text-reset">
            <i className="fab fa-twitter" />
          </Nav.Link>
          <Nav.Link href="#" className="me-4 text-reset">
            <i className="fab fa-google" />
          </Nav.Link>
          <Nav.Link href="#" className="me-4 text-reset">
            <i className="fab fa-instagram" />
          </Nav.Link>
          <Nav.Link href="#" className="me-4 text-reset">
            <i className="fab fa-linkedin" />
          </Nav.Link>
          <Nav.Link href="#" className="me-4 text-reset">
            <i className="fab fa-github" />
          </Nav.Link>
        </div>
        
      </section>
     
      <section className="">
        <div className="container text-center text-md-start mt-5">
         
          <div className="row mt-3">
           
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
             
              <h6 className="text-uppercase fw-bold mb-4">
                <i className="fas fa-gem me-3" />
                Company name
              </h6>
              <p>
                Here you can use rows and columns to organize your footer content.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              </p>
            </div>
           
            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Nav.Link href="#!" className="text-reset">
                  Angular
                </Nav.Link>
              </p>
              <p>
                <Nav.Link href="#!" className="text-reset">
                  React
                </Nav.Link>
              </p>
              <p>
                <Nav.Link href="#!" className="text-reset">
                  Vue
                </Nav.Link>
              </p>
              <p>
                <Nav.Link href="#!" className="text-reset">
                  Laravel
                </Nav.Link>
              </p>
            </div>
           
            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Nav.Link href="#!" className="text-reset">
                  Pricing
                </Nav.Link>
              </p>
              <p>
                <Nav.Link href="#!" className="text-reset">
                  Settings
                </Nav.Link>
              </p>
              <p>
                <Nav.Link href="#!" className="text-reset">
                  Orders
                </Nav.Link>
              </p>
              <p>
                <Nav.Link href="#!" className="text-reset">
                  Help
                </Nav.Link>
              </p>
            </div>
           
            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
             
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>
                <i className="fas fa-home me-3" /> New York, NY 10012, US
              </p>
              <p>
                <i className="fas fa-envelope me-3" />
                info@example.com
              </p>
              <p>
                <i className="fas fa-phone me-3" /> + 01 234 567 88
              </p>
              <p>
                <i className="fas fa-print me-3" /> + 01 234 567 89
              </p>
            </div>
            
          </div>
          
        </div>
      </section>
     
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <Nav.Link className="text-reset fw-bold" href="https://mdbootstrap.com/">
          MDBootstrap.com
        </Nav.Link>
      </div>
     
    </footer>
    
  </>
  
  )
};

export default Footer;
