import { Col, Container, Row } from "react-bootstrap";
import "./ProductForm.css";

const ProductForm = () => {
  return (
    <Container>
      <div className="d-flex justify-content-center">
        <form className="mx-0 mx-lg-5 mx-md-4 add_product_form">
          <h2 className="text-center my-3">Add Super Car</h2>
          <Row>
            <Col lg="6">
              <div className="input_item">
                <label htmlFor="car-name">Name</label>
                <input type="text" id="car-name" placeholder="Car Name" />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="input_item">
                <label htmlFor="car-fuel">Car Fuel</label>
                <select name="car" id="car-fuel">
                  <option value="petrol">Petrol</option>
                  <option value="biesel">Diesel</option>
                  <option value="electricity">Electricity</option>
                  <option value="natural gas">Natural Gas</option>
                </select>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="input_item">
                <label htmlFor="car-drivers">Car Driver</label>
                <select name="cars" id="car-drivers">
                  <option value="manual">Manual</option>
                  <option value="self driving">Self Driving</option>
                </select>
              </div>
            </Col>
            <Col lg="6">
              <div className="input_item">
                <label htmlFor="car-release-date">Release Date</label>
                <input id="car-release-date" type="date" />
              </div>
            </Col>
            <Col lg="12">
              <div className="input_item">
                <label htmlFor="car-photo">Car Photo</label>
                <input
                  id="car-photo"
                  type="text"
                  placeholder="https://www.example.com/imageUrl.extension"
                />
              </div>
            </Col>
            <Col lg="12">
              <div className="input_item">
                <label htmlFor="car-details">Car Details</label>
                <textarea
                  rows="4"
                  id="car-details"
                  type="date"
                  placeholder="Write Something About This Car..."
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

export default ProductForm;
