import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MDBBtn } from "mdb-react-ui-kit";
import { useRef } from "react";
import { useEffect } from "react";
import testimonial1 from "../../assets/testimonial1.png";
import testimonial2 from "../../assets/testimonial2.png";
import testimonial3 from "../../assets/testimonial3.png";
import testimonial4 from "../../assets/testimonial4.png";
import Prev from "../../assets/left.svg";
import Next from "../../assets/right.svg";
import "./testimonial.styles.css";

const testimonials = [
  { src: testimonial1 },
  { src: testimonial2 },
  { src: testimonial3 },
  { src: testimonial4 },
];

const Testimonial = () => {
  const sliderRef = useRef(null);
  useEffect(() => {
    console.log(sliderRef);
  }, []);
  var settings = {
    customPaging: function (i) {
      return (
        <a>
          <img className="img-btn-dots" src={testimonials[i].src} alt="dots" />
        </a>
      );
    },
    ref: sliderRef,
    infinite: true,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
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
        <h4 className="text-success">Happy Patients</h4>

        <div className="testimonial-container">
          <Slider
            {...settings}
            className="border-bottom border-success border-3 bg-light"
          >
            <div className="text-center feedback">
              <p className="">
                "The services that I receive from (DN) is excellent. Dr. (Name)
                and the staff are friendly and ensure that I am properly
                informed about my health and care. I would have no qualms in
                recommending them to friendly and friends."
                <h5 className="text-success">- Patient 1</h5>
              </p>
              <img className="testimonial-img" src={testimonial1} alt="" />
            </div>

            <div className="text-center bg-light feedback">
              <p className="">
                "Dr. (Name) did a great job with my first ever health exam. She
                explained everything to me in a very clear manner. She was also
                kind and friendly. All of the staff was great – they were
                helpful, patient and helped with my insurance."
                <h5 className="text-success">- Patient 2</h5>
              </p>
              <img className="testimonial-img" src={testimonial2} alt="" />
            </div>

            <div className="text-center bg-light feedback">
              <p className="">
                "Wonderful experience with (Clinic name). Dr. (Name) was a
                wonderful surgeon, and the staff was always helpful and kind.
                They ensured I had a smooth prep, surgery, and follow-up. I am
                so glad I chose (Clinic name) and would highly recommend to
                anyone."
                <h5 className="text-success">- Patient 3</h5>
              </p>
              <img className="testimonial-img" src={testimonial3} alt="" />
            </div>

            <div className="text-center bg-light feedback">
              <p className="">
                "Dr. (Name) is a great doctor! He’s very understanding and
                listens to your concerns. He takes time with the patient to help
                them with their health issues! I highly recommend him to anyone
                looking for a specialist."
                <h5 className="text-success">- Patient 4</h5>
              </p>
              <img className="testimonial-img" src={testimonial4} alt="" />
            </div>
          </Slider>
        </div>
        <div className="d-flex justify-content-between">
          <MDBBtn
            color="tertiary"
            className="c-button"
            rippleColor="light"
            onClick={() => sliderRef.current.slickPrev()}
          >
            <img src={Prev} alt="" />
          </MDBBtn>
          <MDBBtn
            color="tertiary"
            className="c-button"
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

export default Testimonial;
