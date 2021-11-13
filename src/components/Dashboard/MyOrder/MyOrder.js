import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import useAuth from "../../../hook/useAuth";

const MyOrder = () => {
  const [cars, setCars] = useState(false);
  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;

  useEffect(() => {
    const url = `/orders/${user.email}`;
    axios.get(url).then((res) => {
      setCars(res.data);
    });
  }, [user.email]);

  const handleOrderDelete = (id) => {
    const url = `/orders/${id}`;
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
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
      } else {
        toast("Delete Cancel!", {
          icon: <i className="fas fa-info-circle"></i>,
        });
      }
    });
  };

  return (
    <Container>
      <h2 className="text-center my-4">My Orders</h2>
      {!cars ? (
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
          {cars.length === 0 ? (
            <div
              style={{ height: "60vh" }}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <h4 style={{ color: "var(--main-color)" }}>Order Not found </h4>
              <Link to="/car-listing" className="btn_round my-3 fs-6">
                Go to Order
              </Link>
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Car</th>
                  <th>Amount</th>
                  <th>Details</th>
                  <th>Status</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {cars &&
                  cars.map((car) => (
                    <tr key={car._id + "sodsfs"}>
                      <td
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        {car.title}
                      </td>
                      <td
                        style={{
                          fontSize: "14px",
                        }}
                        className="amount"
                      >
                        {car.price}
                      </td>
                      <td
                        style={{
                          fontSize: "14px",
                        }}
                      >
                        <Link to={`product-details/${car._id}`}>View</Link>
                      </td>
                      {car.status === "pending" ? (
                        <td
                          style={{
                            fontSize: "14px",
                          }}
                          className="status pending"
                        >
                          Pending
                        </td>
                      ) : car.status === "on-going" ? (
                        <td
                          style={{
                            fontSize: "14px",
                          }}
                          className="status on-going"
                        >
                          On Going
                        </td>
                      ) : (
                        <td
                          style={{
                            fontSize: "14px",
                          }}
                          className="status done"
                        >
                          Done
                        </td>
                      )}

                      <td>
                        <button
                          style={{
                            fontSize: "14px",
                          }}
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
          )}
        </div>
      )}
    </Container>
  );
};

export default MyOrder;
