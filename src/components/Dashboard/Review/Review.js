import { Col, Container, Row } from "react-bootstrap";
import Rating from "react-rating";

const Review = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center">
        <form className="mx-0 mx-lg-5 mx-md-4 add_product_form">
          <div className="my-4">
            <h3 className="text-center">Review And Rating</h3>
            <p className="text-center" style={{ fontSize: "14px" }}>
              Your review will be posted publicly on the website
            </p>
          </div>
          <Row>
            <Col lg="12" className="d-flex justify-content-center">
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                onChange={(rate) => alert(rate)}
              />
            </Col>
            <Col lg="12">
              <div className="input_item">
                <label htmlFor="car-details">Review Message</label>
                <textarea
                  rows="4"
                  id="car-details"
                  type="date"
                  style={{ color: "#fff" }}
                  placeholder="Share details of you own expricence..."
                ></textarea>
              </div>
            </Col>
            <Col lg="12" className="my-4 d-flex justify-content-center ">
              <button className="btn_round fs-6">Add Product</button>
            </Col>
          </Row>
        </form>
      </div>
    </Container>
  );
};

export default Review;
