import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import notfoundImage from "../../assests/images/undraw_page_not_found_re_e9o6.svg";
import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not_found">
      <Container>
        <Row>
          <Col
            lg="6"
            className="d-flex align-items-center justify-content-center flex-column"
          >
            <h2>404, Page Not Found!</h2>
            <p>Something's wrong here. You have traveled out of the world</p>
            <Link to="/home">BACK TO HOMEPAGE</Link>
          </Col>
          <Col lg="6">
            <img className="img-fluid" src={notfoundImage} alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NotFound;
