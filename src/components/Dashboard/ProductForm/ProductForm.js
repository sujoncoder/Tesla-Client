import { Col, Container, Row } from "react-bootstrap";
import "./ProductForm.css";

const ProductForm = ({ data }) => {
  const { handleInput, carData, handleAddProduct, edit } = data;
  return (
    <Container>
      <div className="d-flex justify-content-center">
        <form className="mx-0 mx-lg-5 mx-md-4 add_product_form">
          <h2 className="text-center my-3">
            {edit ? "Edit" : "Add"} Super Car
          </h2>
          <Row>
            <Col lg="6">
              <div className="input_item">
                <label htmlFor="car-name">Name</label>
                <input
                  name="title"
                  onChange={handleInput}
                  value={carData.title}
                  type="text"
                  id="car-name"
                  placeholder="Car Name"
                />
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="input_item">
                <label htmlFor="car-fuel">Car Fuel</label>
                <select
                  onChange={handleInput}
                  value={carData.fuel}
                  name="fuel"
                  id="car-fuel"
                >
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
                <select
                  onChange={handleInput}
                  value={carData.driver}
                  name="driver"
                  id="car-drivers"
                >
                  <option value="manual">Manual</option>
                  <option value="self driving">Self Driving</option>
                </select>
              </div>
            </Col>
            <Col lg="6">
              <div className="input_item">
                <label htmlFor="car-release-date">Release Date</label>
                <input
                  name="date"
                  onChange={handleInput}
                  value={carData.date}
                  id="car-release-date"
                  type="date"
                />
              </div>
            </Col>
            <Col lg="6">
              <div className="input_item">
                <label htmlFor="car-amount">Car Amount</label>
                <input
                  name="price"
                  onChange={handleInput}
                  value={carData.price}
                  id="car-amout"
                  type="number"
                  placeholder="Price"
                />
              </div>
            </Col>
            <Col lg="6">
              <div className="input_item">
                <label htmlFor="car-upload-photo">Upload Photo</label>
                <input disabled id="car-upload-photo" type="file" />
              </div>
            </Col>
            <Col lg="12">
              <div className="input_item">
                <label htmlFor="car-photo">Car Photo</label>
                <input
                  name="image"
                  onChange={handleInput}
                  value={carData.image}
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
                  name="desc"
                  onChange={handleInput}
                  value={carData.desc}
                  rows="4"
                  id="car-details"
                  type="date"
                  placeholder="Write Something About This Car..."
                ></textarea>
              </div>
            </Col>
            <Col lg="12" className="my-4 d-flex justify-content-center ">
              <button onClick={handleAddProduct} className="btn_round fs-6">
                {edit ? "Edit" : "Add"} Product
              </button>
            </Col>
          </Row>
        </form>
      </div>
    </Container>
  );
};

export default ProductForm;
