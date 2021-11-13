import axios from "axios";
import { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";
import Card from "../Card/Card";
import useAuth from "../../../hook/useAuth";
import "./BuyAndSell.css";
import { useHistory } from "react-router";
import toast from "react-hot-toast";

const BuyAndSell = () => {
  const [cars, setCars] = useState([]);
  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;

  const history = useHistory();

  useEffect(() => {
    axios.get(`/carshome`).then((res) => {
      setCars(res.data);
    });
  }, []);

  const handleBookNow = (car) => {
    if (user.email) {
      const url = `/orders?email=${user.email}`;
      axios.post(url, { status: "pending", ...car }).then((res) => {
        const data = res.data;
        if (data?.acknowledged) {
          toast.success("Successfully Car Added!");
        }
      });
    } else {
      history.push("/login");
    }
  };
  return (
    <div className="buy_and_sell py-5" id="buy-and-sell">
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
        {cars.length === 0 ? (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div className="spinner_wrapper">
              <svg viewBox="0 0 100 100">
                <defs>
                  <filter id="shadow">
                    <feDropShadow
                      dx="0"
                      dy="0"
                      stdDeviation="1.5"
                      floodColor="#fc6767"
                    />
                  </filter>
                </defs>
                <circle
                  id="spinner"
                  style={{
                    fill: "transparent",
                    stroke: "var(--main-color)",
                    strokeWidth: "7px",
                    strokeLinecap: "round",
                    filter: "url(#shadow)",
                  }}
                  cx="50"
                  cy="50"
                  r="45"
                />
              </svg>
            </div>
          </div>
        ) : (
          <>
            <Row>
              {cars.map((car) => (
                <Card
                  key={car._id + "so"}
                  data={car}
                  handleBookNow={handleBookNow}
                />
              ))}
            </Row>
          </>
        )}
      </Container>
    </div>
  );
};

export default BuyAndSell;
