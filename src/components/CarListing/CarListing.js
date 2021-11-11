import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../Home/Card/Card";

const CarListing = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/cars").then((res) => {
      setCars(res.data);
    });
  }, []);
  return (
    <div className="buy_and_sell py-5">
      <Container>
        <div className="text-center">
          <p style={{ color: "#ddd" }} className="fw-bold">
            Buy and sell
          </p>
          <h1
            className="mb-5"
            style={{
              color: "var(--main-color)",
            }}
          >
            Get Cash for Your Car
          </h1>
        </div>
        <Row>
          {cars.map((car) => (
            <Card key={car._id + "so"} data={car} />
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default CarListing;
