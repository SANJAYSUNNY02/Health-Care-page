import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { useRef } from "react";
import { useEffect } from "react";
import P1 from "../../assets/partners/1.png";
import P2 from "../../assets/partners/2.png";
import P3 from "../../assets/partners/3.png";
import P4 from "../../assets/partners/4.png";
import P5 from "../../assets/partners/5.png";
import P6 from "../../assets/partners/6.png";
import P7 from "../../assets/partners/7.png";
import P8 from "../../assets/partners/8.png";
import Prev from "../../assets/left.svg";
import Next from "../../assets/right.svg";
import "./partners.styles.css";

const Partners = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  var settings = {
    ref: sliderRef,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 2,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
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
        <div>
          <h4 className="text-success">Meet Our Partners</h4>
        </div>
        <div className="" style={{ margin: 30 }}>
          <Slider {...settings} className="mb-0">
            <div className="partner-img-container px-2 py-2 mx-3">
              <img src={P1} alt="" />
            </div>
            <div className="partner-img-container px-2 py-2 mx-3">
              <img src={P2} alt="" />
            </div>
            <div className="partner-img-container px-2 py-2 mx-3">
              <img src={P3} alt="" />
            </div>
            <div className="partner-img-container px-2 py-2 mx-3">
              <img src={P4} alt="" />
            </div>
            <div className="partner-img-container px-2 py-2 mx-3">
              <img src={P5} alt="" />
            </div>
            <div className="partner-img-container px-2 py-2 mx-3">
              <img src={P6} alt="" />
            </div>
            <div className="partner-img-container px-2 py-2 mx-3">
              <img src={P7} alt="" />
            </div>
            <div className="partner-img-container px-2 py-2 mx-3">
              <img src={P8} alt="" />
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

export default Partners;
