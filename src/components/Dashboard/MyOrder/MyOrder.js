import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const MyOrder = () => {
  const [cars, setCars] = useState([]);
  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;

  useEffect(() => {
    const url = `http://localhost:5000/orders/${user.email}`;
    axios.get(url).then((res) => {
      setCars(res.data);
    });
  }, [user.email]);

  const handleOrderDelete = (id) => {
    const url = `http://localhost:5000/orders/${id}`;
    axios.delete(url).then((res) => {
      const data = res.data;
      const filterCar = cars.filter((car) => car._id !== id);
      if (data.acknowledged) {
        setCars(filterCar);
        toast.success("Successfully Delete Car!");
      } else {
        toast.error("Something went wrong!");
      }
    });
  };

  return (
    <Container>
      <h2 className="text-center my-4">My Orders</h2>
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
        <div className="table_wrapper my-4">
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
                    <button
                      onClick={() => handleOrderDelete(car._id)}
                      className="delete_btn"
                    >
                      Delete
                    </button>
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

export default MyOrder;
