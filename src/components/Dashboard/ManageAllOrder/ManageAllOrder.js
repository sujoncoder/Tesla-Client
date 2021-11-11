import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ManageAllOrder.css";

const ManageAllOrder = () => {
  const [cars, setCars] = useState([]);
  const url = `http://localhost:5000/cars`;
  useEffect(() => {
    axios.get(url).then((res) => {
      setCars(res.data);
    });
  }, [url]);
  return (
    <Container>
      <h2 className="text-center my-4">Manage All Orders</h2>
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
        <div className="table_wrapper">
          <table>
            <thead>
              <tr>
                <th>Car</th>
                <th>Amount</th>
                <th>Details</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <tr key={car._id + "sodsfs"}>
                  <td>{car.title}</td>
                  <td className="amount">{car.price}</td>
                  <td>
                    <Link to="/">View</Link>
                  </td>
                  <td>
                    <select
                      className="btn_round"
                      style={{
                        minHeight: "35px",
                        width: "100px",
                        borderRadius: "5px",
                        padding: "0 5px",
                        outline: "none",
                      }}
                      name="cars"
                      id="cars"
                    >
                      <option value="volvo">Pending</option>
                      <option value="saab">On Going</option>
                      <option value="saab">Done</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </Container>
  );
};

export default ManageAllOrder;
