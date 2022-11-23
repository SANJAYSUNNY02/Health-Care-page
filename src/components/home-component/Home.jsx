import DocterTeamCaurosel from "../doctorTeam-component/doctorTeam-caurosel";
import NavbarComponent from "../nav-componet/NavbarComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import heartRate from "../../assets/heart-rate.png";
import firstAid from "../../assets/first-aid.png";
import wheelChair from "../../assets/wheelchair.png";
import { Button } from "react-bootstrap";
import ServicesTab from "./../service-tabs-component/ServicesTab";
import BookAppointment from "./../bookappoinment-component/BookAppointment";
import BottomFooter from "../footer/Footer";
import DocterTeam2 from "./../docterTeam2-component/DocterTeam2";
import Partners from "../partners-component/Partners";
import "./home.styles.css";
import Testimonial from "../testimonial-component/Testimonial";

function Home() {
  return (
    <div>
      <div className="bg-success">
        <NavbarComponent />
        <DocterTeamCaurosel />
      </div>
      <Container className="mt-5">
        <Row>
          <Col lg="4" md="12" className="typeService-box ">
            <div className="px-2 py-2">
              <Row>
                <Col md="10">
                  <h5>Diabetes and Obesity Counselling</h5>
                </Col>
                <Col md="2">
                  <img src={heartRate} alt="" />
                </Col>
              </Row>
              <p className="para-text">
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book. It has survived not only five
                centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages.
              </p>
              <Button variant="light">Read more</Button>
            </div>
          </Col>
          <Col lg="4" md="12" className="typeService-box ">
            <div className="px-2 py-2">
              <Row>
                <Col md="10">
                  <h5>Diabetes and Obesity Counselling</h5>
                </Col>
                <Col md="2">
                  <img src={firstAid} alt="" />
                </Col>
              </Row>
              <p className="para-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries
              </p>
              <Button variant="light text-start">Read more</Button>
            </div>
          </Col>
          <Col lg="4" md="12" className="typeService-box ">
            <div className="px-2 py-2">
              <Row>
                <Col md="10">
                  <h5>Diabetes and Obesity Counselling</h5>
                </Col>
                <Col md="2">
                  <img src={wheelChair} alt="" />
                </Col>
              </Row>
              <p className="para-text">
                But also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the
                release of Letraset sheets containing Lorem Ipsum passages, and
                more recently with desktop publishing software like Aldus
                PageMaker including versions of Lorem Ipsum.
              </p>
              <Button variant="light text-start">Read more</Button>
            </div>
          </Col>
        </Row>
        <Row className="mt-5 service-booking">
          <Col lg="6" md="12" className="mt-3">
            <h5 className="text-success mb-3">What we Offer</h5>

            <ServicesTab />
          </Col>
          <Col lg="6" md="12" className="mt-3">
            <h5 className="text-success mb-3">Book Appointment</h5>
            <BookAppointment />
          </Col>
        </Row>
        <DocterTeam2 />
        <Testimonial />
        <Partners />
      </Container>
      <BottomFooter />
    </div>
  );
}

export default Home;
