import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../Card/Card";
import "./BuyAndSell.css";

const BuyAndSell = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:5000/carshome").then((res) => {
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
          <h1 className="text-white mb-5">Get Cash for Your Car</h1>
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

export default BuyAndSell;
