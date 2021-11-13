import aboutPhoto from "../../assests/images/undraw_preferences_popup_wbfw.svg";
import "./AboutUs.css";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <>
      <Container className="mb-5">
        <div className="about_header text-white text-center my-5">
          <h1 className="fw-bold">About us</h1>
        </div>
        <Row
          style={{
            alignItems: "center",
            justifyContent: "start",
          }}
        >
          <Col lg="6" md="12">
            <img
              src={aboutPhoto}
              className="img-fluid"
              style={{
                height: "auto",
              }}
              alt=""
            />
          </Col>
          <Col lg="6" md="12" className="text-white">
            <p
              className="fw-bold mb-2"
              style={{
                color: "var(--main-color)",
              }}
            >
              Our short story
            </p>
            <h3 className="fw-bold mb-4">We delivered car thousand times</h3>
            <p
              style={{
                fontSize: "14px",
              }}
            >
              Most of Sorum's vehicles are still covered under their original
              manufacturer's warranty, but the coverage may be limited. Sorum's
              Vehicle Service Protection (VSP) product helps protect you in the
              event of unexpected expenses.
              <br />
              <br />
              If your vehicle is ever declared a total loss due to an accident,
              theft or natural disaster, your insurance company might only
              reimburse you for their assessed market value of the vehicle,
              leaving you to pay the balance or "gap".
            </p>
            <Link className="btn_round fs-6 my-4" to="/contact">
              About More
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
