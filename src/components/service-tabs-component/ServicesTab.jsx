import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./ServiceTab.styles.css";

const ServicesTab = () => {
  return (
    <div className="service-tabs">
      <Tabs
        defaultActiveKey="service #1"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="service #1" title="Service #1">
          <Row>
            <Col sm="12" md="6" className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdzHkUtrogRFFi8Kto34XChvES6sMKunQMQ&usqp=CAU"
                alt=""
              />
            </Col>
            <Col sm="12" md="6">
              <p className="para-text">
                <h5 className="text-success">Emergency room services</h5>
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
              <Button variant="success">Read more</Button>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="service #2" title="Service #2">
          <Row>
            <Col sm="12" md="6" className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdzHkUtrogRFFi8Kto34XChvES6sMKunQMQ&usqp=CAU"
                alt=""
              />
            </Col>
            <Col sm="12" md="6">
              <p className="para-text">
                <h5 className="text-success">Blood services</h5>
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
              <Button variant="success">Read more</Button>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="service #3" title="Service #3">
          <Row>
            <Col sm="12" md="6" className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdzHkUtrogRFFi8Kto34XChvES6sMKunQMQ&usqp=CAU"
                alt=""
              />
            </Col>
            <Col sm="12" md="6">
              <p className="para-text">
                <h5 className="text-success">Laboratory services.</h5>
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
              <Button variant="success">Read more</Button>
            </Col>
          </Row>
        </Tab>
        <Tab eventKey="service #4" title="Service #4">
          <Row>
            <Col sm="12" md="6" className="text-center">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdzHkUtrogRFFi8Kto34XChvES6sMKunQMQ&usqp=CAU"
                alt=""
              />
            </Col>
            <Col sm="12" md="6">
              <p className="para-text">
                <h5 className="text-success">X-ray/radiology services</h5>
                when an unknown printer took a galley of type and scrambled it
                to make a type specimen book.
              </p>
              <Button variant="success">Read more</Button>
            </Col>
          </Row>
        </Tab>
      </Tabs>
    </div>
  );
};

export default ServicesTab;
