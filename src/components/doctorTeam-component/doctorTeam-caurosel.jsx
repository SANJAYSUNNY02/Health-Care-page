import { useRef } from "react";
import { Container } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";
// import Carousel from "react-bootstrap/Carousel";

import docter1 from "../../assets/Docters/docter1.png";
import docter2 from "../../assets/Docters/docter2.png";
import docter3 from "../../assets/Docters/docter3.png";
import docter4 from "../../assets/Docters/docter4.png";
import docter5 from "../../assets/Docters/docter5.png";
import docter6 from "../../assets/Docters/docter6.png";
import Prev from "../../assets/left.svg";
import Next from "../../assets/right.svg";
import "./doctorTeam.styles.css";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

const DocterTeamCaurosel = () => {
  const sliderRef = useRef(null);
  var settings = {
    ref: sliderRef,

    infinite: true,
    centerPadding: "10px",
    slidesToShow: 4,
    slidesToScroll: 3,
    speed: 500,
    nextArrow: 0,
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
    <div>
      <Container className="doctorCarousel mt-5">
        <div className="text-center text-white">
          <h1>Meet Our Docters Team</h1>
          <p>
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It has survived not only five centuries,
            but also the leap into electronic typesetting, remaining essentially
            unchanged.
          </p>
        </div>
        <Slider {...settings}>
          <div>
            <img className="d-t-1" src={docter1} alt="First slide" />
          </div>
          <div>
            <img className="d-t-1" src={docter2} alt="First slide" />
          </div>
          <div>
            <img className="d-t-1" src={docter3} alt="First slide" />
          </div>
          <div>
            <img className="d-t-1" src={docter4} alt="First slide" />
          </div>
          <div>
            <img className="d-t-1" src={docter5} alt="First slide" />
          </div>
          <div>
            <img className="d-t-1" src={docter6} alt="First slide" />
          </div>
        </Slider>
      </Container>
      <div className="caurosel-buttons d-flex justify-content-center border-bottom">
        <MDBBtn
          color="tertiary"
          className="square border"
          rippleColor="light"
          onClick={() => sliderRef.current.slickPrev()}
        >
          <img src={Prev} alt="" />
        </MDBBtn>

        <MDBBtn
          color="tertiary"
          className="buttons square border"
          onClick={() => sliderRef.current.slickNext()}
        >
          <img src={Next} alt="" />
        </MDBBtn>
      </div>
    </div>
  );
};

export default DocterTeamCaurosel;
