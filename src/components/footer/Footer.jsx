import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import docter7 from "../../assets/Docters/docter7.png";

import "./footer.styles.css";

function onLinkClick(e) {
  e.preventDefault();
  // further processing happens here
}

const BottomFooter = () => {
  return (
    <MDBFooter
      bgColor="success"
      className="text-center text-lg-start text-light"
    >
      <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
        <div className="me-5 d-none d-lg-block">
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href="#1" className="me-4 text-reset" onClick={onLinkClick}>
            <MDBIcon color="light" fab icon="facebook-f" />
          </a>
          <a href="#!" className="me-4 text-reset" onClick={onLinkClick}>
            <MDBIcon color="light" fab icon="twitter" />
          </a>
          <a href="#!" className="me-4 text-reset" onClick={onLinkClick}>
            <MDBIcon color="light" fab icon="google" />
          </a>
          <a href="#!" className="me-4 text-reset" onClick={onLinkClick}>
            <MDBIcon color="light" fab icon="instagram" />
          </a>
          <a href="#!" className="me-4 text-reset" onClick={onLinkClick}>
            <MDBIcon color="light" fab icon="linkedin" />
          </a>
          <a href="#!" className="me-4 text-reset" onClick={onLinkClick}>
            <MDBIcon color="light" fab icon="github" />
          </a>
        </div>
      </section>

      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol md="5" lg="4" xl="3" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">
                <MDBIcon color="light" icon="gem" className="me-3" />
                About Us
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
              <p>
                <MDBIcon color="light" icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color="light" icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon color="light" icon="phone" className="me-3" /> + 01 234
                567 88
              </p>
              <p>
                <MDBIcon color="light" icon="print" className="me-3" /> + 01 234
                567 89
              </p>
            </MDBCol>

            <MDBCol
              md="4"
              lg="3"
              xl="3"
              className="mx-auto mb-md-0 mb-4 text-center"
            >
              <h6 className="text-uppercase fw-bold mb-4">Recent Posts</h6>
              <div className="post-container d-flex justify-content-center">
                <img className="post-image " src={docter7} alt="post" />
                <p className="post-para">
                  <h6>POST 1 HEADING</h6>
                  This post have some information.
                  <p>Post 22 Nov 2022</p>
                </p>
              </div>
              <div className="post-container d-flex justify-content-center">
                <img className="post-image " src={docter7} alt="post" />
                <p className="post-para">
                  <h6>POST 1 HEADING</h6>
                  This post have some information.
                  <p>Post 22 Nov 2022</p>
                </p>
              </div>
              <div className="post-container d-flex justify-content-center">
                <img className="post-image " src={docter7} alt="post" />
                <p className="post-para">
                  <h6>POST 1 HEADING</h6>
                  This post have some information.
                  <p>Post 22 Nov 2022</p>
                </p>
              </div>
              {/* <div className="d-flex ">
                <img className="post-image" src={docter4} alt="post" />
                <p>
                  <h6>POST 1 HEADING</h6>
                  This post have some information
                  <span>Post 22 Nov 2022</span>
                </p>
              </div> */}
            </MDBCol>

            <MDBCol md="3" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Twitter Widgets</h6>
              <div className="d-flex justify-content-center">
                <MDBIcon color="light" fab icon="twitter" />
                <p className="tweet-para">
                  @health care... this tweet ha an information.....
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <MDBIcon color="light" fab icon="twitter" />
                <p className="tweet-para">
                  @health care... this tweet ha an information.....
                </p>
              </div>
              <div className="d-flex justify-content-center">
                <MDBIcon color="light" fab icon="twitter" />
                <p className="tweet-para">
                  @health care... this tweet ha an information.....
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className="footer-bg text-center p-4">
        © 2021 Copyright:
        <a
          className="text-reset fw-bold"
          href="#copyrights"
          onClick={onLinkClick}
        >
          Health Care Hospitals
        </a>
      </div>
    </MDBFooter>
  );
};

export default BottomFooter;
