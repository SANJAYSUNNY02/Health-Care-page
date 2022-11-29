import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { useRef } from "react";
import { useEffect } from "react";
import docter5 from "../../assets/docter5.png";
import docter1 from "../../assets/docter1.png";
import docter2 from "../../assets/docter2.png";
import docter3 from "../../assets/docter3.png";
import docter4 from "../../assets/docter4.png";
import docter6 from "../../assets/docter6.png";
import Prev from "../../assets/left.svg";
import Next from "../../assets/right.svg";
import "./docterTeam2.styles.css";

const DocterTeam2 = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  var settings = {
    ref: sliderRef,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="my-5 border-bottom">
      <div>
        <h4 className="text-success">Our Team</h4>

        <div className="slider-container">
          <Slider {...settings} className="mb-0">
            <div className="about-doc text-center py-1 mx-2">
              <img className="img-container" src={docter1} alt="shubham img" />
              <div className="border-top py-2 px-2 ">
                <h5>Dr. Shubham</h5>
                <p className="doc-desc">
                  Hospital services is a term that refers to medical and
                  surgical services and the supporting laboratories, equipment
                  and personnel that make up the medical and surgical mission of
                  a hospital or hospital system.
                </p>
                <MDBBtn color="tertiary" className="readmore-btn">
                  Read More
                </MDBBtn>
              </div>
            </div>
            <div className="about-doc text-center  py-1 mx-2">
              <img
                className="img-container"
                src={docter2}
                alt="yashwanth img"
              />
              <div className="py-2 px-2 border-top">
                <h5>Dr. Yashwanth</h5>
                <p className="doc-desc">
                  Hospital services is a term that refers to medical and
                  surgical services and the supporting laboratories, equipment
                  and personnel that make up the medical and surgical mission of
                  a hospital or hospital system.
                </p>
                <MDBBtn color="tertiary" className="readmore-btn">
                  Read More
                </MDBBtn>
              </div>
            </div>
            <div className="about-doc text-center  py-1 mx-2">
              <img className="img-container" src={docter3} alt="Ruth img" />
              <div className="py-2 px-2 border-top">
                <h5>Dr. Ruth</h5>
                <p className="doc-desc">
                  Hospital services is a term that refers to medical and
                  surgical services and the supporting laboratories, equipment
                  and personnel that make up the medical and surgical mission of
                  a hospital or hospital system.
                </p>
                <MDBBtn color="tertiary" className="readmore-btn">
                  Read More
                </MDBBtn>
              </div>
            </div>
            <div className="about-doc text-center py-1 mx-2">
              <img className="img-container" src={docter4} alt="sanjay img" />
              <div className="py-2 px-2 border-top">
                <h5>Dr. Sanjay</h5>
                <p className="doc-desc">
                  Hospital services is a term that refers to medical and
                  surgical services and the supporting laboratories, equipment
                  and personnel that make up the medical and surgical mission of
                  a hospital or hospital system.
                </p>
                <MDBBtn color="tertiary" className="readmore-btn">
                  Read More
                </MDBBtn>
              </div>
            </div>
            <div className="about-doc text-center py-1 mx-2">
              <img className="img-container" src={docter5} alt="varun img" />
              <div className="py-2 px-2 border-top">
                <h5>Dr. Varun</h5>
                <p className="doc-desc">
                  Hospital services is a term that refers to medical and
                  surgical services and the supporting laboratories, equipment
                  and personnel that make up the medical and surgical mission of
                  a hospital or hospital system.
                </p>
                <MDBBtn color="tertiary" className="readmore-btn">
                  Read More
                </MDBBtn>
              </div>
            </div>
            <div className="about-doc text-center  py-1 mx-2">
              <img
                className="img-container"
                src={docter6}
                alt="sheershika img"
              />
              <div className="py-2 px-2 border-top">
                <h5>Dr. Sheershika</h5>
                <p className="doc-desc">
                  Hospital services is a term that refers to medical and
                  surgical services and the supporting laboratories, equipment
                  and personnel that make up the medical and surgical mission of
                  a hospital or hospital system.
                </p>
                <MDBBtn color="tertiary" className="readmore-btn">
                  Read More
                </MDBBtn>
              </div>
            </div>
          </Slider>
        </div>
        <div className="d-flex justify-content-end">
          <MDBBtn
            color="tertiary"
            className="c-button square border"
            rippleColor="light"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <img src={Prev} alt="" />
          </MDBBtn>
          <MDBBtn
            color="tertiary"
            className="c-button square border"
            rippleColor="light"
            onClick={() => sliderRef.current.slickNext()}
          >
            <img src={Next} alt="" />
          </MDBBtn>
        </div>
      </div>
    </div>
  );
};

export default DocterTeam2;
